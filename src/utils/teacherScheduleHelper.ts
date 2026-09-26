import { DayOfWeek, Grade, LessonPlan, MasterTimetable, ScheduleItem, SchoolInfo, TeacherType } from "../types";
import { DEFAULT_CLASSES, DEFAULT_TEACHERS, generateWeeklyScheduleFromTimetable, calculateWeekDateRange, TeacherInfo, isSpecialNeedsClassOrTeacher, getDefaultSpecialNeedsDescription } from "../data/defaultTimetables";
import { generateFullWeekLessonPlans } from "../data/curriculumData";

/**
 * Filter schedule items to strictly include only periods directly taught by the teacher
 * (e.g., removing specialist subjects from a homeroom teacher's personal schedule)
 */
export function filterPersonalTeacherSchedule(
  items: ScheduleItem[],
  teacherType: TeacherType = "homeroom"
): ScheduleItem[] {
  if (teacherType === "specialist") {
    // For specialist teachers, all items in their schedule are already their taught periods
    return items;
  }
  // For homeroom teachers, exclude specialist subjects taught by other teachers
  return items.filter((it) => {
    if (it.isSpecialistPeriod) return false;
    if (it.specialistTeacherName) return false;
    if (!it.note) return true;
    const n = it.note;
    return !n.includes("GV Chuyên") && 
           !n.includes("GV Bộ môn") && 
           !n.includes("GV Dạy tiết") && 
           !n.includes("HT:") &&
           !n.includes("PHT:") && 
           !n.includes("TPT:") && 
           !n.includes("PCGD:") && 
           !n.includes("Thầy Sum") &&
           !n.includes("Thầy Sơn") &&
           !n.includes("Cô My") &&
           !n.includes("Cô Hằng") &&
           !n.includes("Thầy Toàn") &&
           !n.includes("Thầy Dánh") &&
           !n.includes("Cô Như") &&
           !n.includes("Cô Tâm") &&
           !n.includes("Cô Ngân") &&
           !n.includes("Cô Thơ") &&
           !n.includes("Cô Dung") &&
           !n.includes("Cô Tú Trinh") &&
           !n.includes("Tú Trinh") &&
           !n.includes("Trương Thị Kim Dương") &&
           !n.includes("Lê Thị Hồng Thủy") &&
           !n.includes("Nguyễn Hoàng Tuấn");
  });
}

/**
 * Generate full teaching schedule & lesson plans specifically for any teacher in the school
 */
export function getScheduleAndPlansForTeacher(
  teacher: TeacherInfo,
  masterTimetable: MasterTimetable,
  currentSchoolInfo: SchoolInfo,
  week?: number
): {
  schoolInfo: SchoolInfo;
  scheduleItems: ScheduleItem[];
  personalScheduleItems: ScheduleItem[];
  lessonPlans: LessonPlan[];
} {
  const selectedWeek = week || currentSchoolInfo.week || 1;
  const isHomeroom = teacher.type === "homeroom";
  
  let targetClass = currentSchoolInfo.className;
  let targetGrade = currentSchoolInfo.grade;

  if (isHomeroom && teacher.assignedClasses && teacher.assignedClasses.length > 0) {
    targetClass = teacher.assignedClasses[0];
    const gNum = parseInt(targetClass.charAt(0)) as Grade;
    if (!isNaN(gNum) && gNum >= 1 && gNum <= 5) {
      targetGrade = gNum;
    }
  }

  const weekRange = calculateWeekDateRange(selectedWeek);
  const hasSpecialNeeds = isSpecialNeedsClassOrTeacher(targetClass, teacher.name) || Boolean(teacher.hasSpecialNeedsStudent);
  const teacherSchoolInfo: SchoolInfo = {
    ...currentSchoolInfo,
    teacherName: teacher.name,
    teacherType: teacher.type as TeacherType,
    specialistSubject: teacher.specialistSubject || currentSchoolInfo.specialistSubject || "Tiếng Anh",
    assignedClasses: teacher.assignedClasses || (isHomeroom ? [targetClass] : DEFAULT_CLASSES),
    className: targetClass,
    grade: targetGrade,
    week: selectedWeek,
    startDate: weekRange.startDate,
    endDate: weekRange.endDate,
    hasSpecialNeedsStudent: hasSpecialNeeds,
    specialNeedsDescription: hasSpecialNeeds 
      ? (teacher.specialNeedsDescription || getDefaultSpecialNeedsDescription(targetClass, targetGrade)) 
      : currentSchoolInfo.specialNeedsDescription,
  };

  // Generate the full schedule from the master timetable
  const rawSchedule = generateWeeklyScheduleFromTimetable(
    masterTimetable,
    teacherSchoolInfo.className,
    teacherSchoolInfo.teacherName,
    teacherSchoolInfo.week,
    teacherSchoolInfo.startDate,
    teacherSchoolInfo.teacherType,
    teacherSchoolInfo.specialistSubject,
    teacherSchoolInfo.assignedClasses
  );

  // Filter personal schedule (excluding specialist periods for GVCN)
  const personalSchedule = filterPersonalTeacherSchedule(rawSchedule, teacherSchoolInfo.teacherType);

  // Generate Lesson Plans (KHBD) specifically for this teacher's taught subjects
  const scheduleForPlans = isHomeroom ? personalSchedule : rawSchedule;
  const plans = generateFullWeekLessonPlans(teacherSchoolInfo, scheduleForPlans);

  return {
    schoolInfo: teacherSchoolInfo,
    scheduleItems: rawSchedule,
    personalScheduleItems: personalSchedule,
    lessonPlans: plans,
  };
}
