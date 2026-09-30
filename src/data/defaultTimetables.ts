import { DayOfWeek, Grade, MasterTimetable, ScheduleItem, SessionType } from "../types";
import { getDetailedMusicLesson } from "./musicLessonDetails";
import { getDetailedEnglishLesson } from "./englishLessonDetails";
import { getGradeCurriculumLesson } from "./gradeCurriculums";
import { cleanLessonTitle } from "../utils/lessonTitleHelper";
import { getShlAtgtLessonTitleForLbg } from "./atgtCurriculum";

export interface TeacherInfo {
  id: string;
  name: string;
  role: string;
  type: "homeroom" | "specialist";
  specialistSubject?: string;
  assignedClasses?: string[];
  subjects: string[];
  teachingPeriods: number;
  concurrentPeriods?: number;
  totalPeriods?: number;
  hasSpecialNeedsStudent?: boolean;
  specialNeedsDescription?: string;
}

export function isSpecialNeedsClassOrTeacher(className?: string, teacherName?: string): boolean {
  if (!className && !teacherName) return false;
  const cls = (className || "").toUpperCase();
  const tName = (teacherName || "").toLowerCase();
  
  if (cls === "5B" || tName.includes("huế") || tName.includes("hue")) return true;
  return false;
}

export function getDefaultSpecialNeedsDescription(className?: string, grade?: number): string {
  const g = grade || (className ? parseInt(className.charAt(0)) : 5) || 5;
  const c = className || `${g}B`;
  return `Lớp ${c} có 01 học sinh khuyết tật học hòa nhập (tiếp thu chậm, kỹ năng vận động tinh và viết chữ còn hạn chế). Giáo viên hỗ trợ trực tiếp, giảm tải yêu cầu độ dài bài làm, kiên nhẫn hướng dẫn theo tiến độ của học sinh.`;
}

export const DEFAULT_CLASSES = [
  "1A1", "1A2", "1A3", "1A4",
  "2A1", "2A2", "2A3", "2A4",
  "3A1", "3A2", "3A3", "3A4",
  "4A1", "4A2", "4A3", "4A4",
  "5A1", "5A2", "5A3", "5A4",
];

export const DEFAULT_TEACHERS: TeacherInfo[] = [
  // ================= 20 GIÁO VIÊN CHỦ NHIỆM (KHỐI 1 - 5) =================
  // KHỐI 1
  {
    id: "gv_k_phuong_1a1",
    name: "Nguyễn Phan Thị Kiều Phương",
    role: "GVCN Lớp 1A1 (TTCM Khối 1)",
    type: "homeroom",
    assignedClasses: ["1A1"],
    subjects: ["Tiếng Việt", "Toán", "HĐTN"],
    teachingPeriods: 16,
    concurrentPeriods: 7,
    totalPeriods: 23,
  },
  {
    id: "gv_chi_1a2",
    name: "Cô Chi",
    role: "GVCN Lớp 1A2",
    type: "homeroom",
    assignedClasses: ["1A2"],
    subjects: ["Tiếng Việt", "Toán", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },
  {
    id: "gv_kha_1a3",
    name: "Thầy Kha",
    role: "GVCN Lớp 1A3",
    type: "homeroom",
    assignedClasses: ["1A3"],
    subjects: ["Tiếng Việt", "Toán", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },
  {
    id: "gv_nhi_1a4",
    name: "Cô Nhi",
    role: "GVCN Lớp 1A4",
    type: "homeroom",
    assignedClasses: ["1A4"],
    subjects: ["Tiếng Việt", "Toán", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },

  // KHỐI 2
  {
    id: "gv_thuy_2a1",
    name: "Cô Thúy",
    role: "GVCN Lớp 2A1",
    type: "homeroom",
    assignedClasses: ["2A1"],
    subjects: ["Tiếng Việt", "Toán", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },
  {
    id: "gv_hanh_2a2",
    name: "Cô Hạnh",
    role: "GVCN Lớp 2A2 (TPCM Khối 2)",
    type: "homeroom",
    assignedClasses: ["2A2"],
    subjects: ["Tiếng Việt", "Toán", "HĐTN"],
    teachingPeriods: 18,
    concurrentPeriods: 5,
    totalPeriods: 23,
  },
  {
    id: "gv_sen_2a3",
    name: "Cô Sen",
    role: "GVCN Lớp 2A3",
    type: "homeroom",
    assignedClasses: ["2A3"],
    subjects: ["Tiếng Việt", "Toán", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },
  {
    id: "gv_phuc_2a4",
    name: "Thầy Phúc",
    role: "GVCN Lớp 2A4",
    type: "homeroom",
    assignedClasses: ["2A4"],
    subjects: ["Tiếng Việt", "Toán", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },

  // KHỐI 3
  {
    id: "gv_k_ngan_3a1",
    name: "Cô K. Ngân",
    role: "GVCN Lớp 3A1",
    type: "homeroom",
    assignedClasses: ["3A1"],
    subjects: ["Tiếng Việt", "Toán", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },
  {
    id: "gv_giao_3a2",
    name: "Cô Giao",
    role: "GVCN Lớp 3A2",
    type: "homeroom",
    assignedClasses: ["3A2"],
    subjects: ["Tiếng Việt", "Toán", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },
  {
    id: "gv_thien_3a3",
    name: "Thầy Thiện",
    role: "GVCN Lớp 3A3",
    type: "homeroom",
    assignedClasses: ["3A3"],
    subjects: ["Tiếng Việt", "Toán", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },
  {
    id: "gv_danh_3a4",
    name: "Thầy Danh",
    role: "GVCN Lớp 3A4",
    type: "homeroom",
    assignedClasses: ["3A4"],
    subjects: ["Tiếng Việt", "Toán", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },

  // KHỐI 4
  {
    id: "gv_nga_4a1",
    name: "Cô Nga",
    role: "GVCN Lớp 4A1",
    type: "homeroom",
    assignedClasses: ["4A1"],
    subjects: ["Tiếng Việt", "Toán", "Khoa học", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },
  {
    id: "gv_thoa_4a2",
    name: "Cô Thoa",
    role: "GVCN Lớp 4A2 (TTCM Khối 4)",
    type: "homeroom",
    assignedClasses: ["4A2"],
    subjects: ["Tiếng Việt", "Toán", "Khoa học", "HĐTN"],
    teachingPeriods: 16,
    concurrentPeriods: 7,
    totalPeriods: 23,
  },
  {
    id: "gv_d_hang_4a3",
    name: "Cô D. Hằng",
    role: "GVCN Lớp 4A3",
    type: "homeroom",
    assignedClasses: ["4A3"],
    subjects: ["Tiếng Việt", "Toán", "Khoa học", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },
  {
    id: "gv_trung_4a4",
    name: "Thầy Trung",
    role: "GVCN Lớp 4A4",
    type: "homeroom",
    assignedClasses: ["4A4"],
    subjects: ["Tiếng Việt", "Toán", "Khoa học", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },

  // KHỐI 5
  {
    id: "gv_linh_5a1",
    name: "Cô Linh",
    role: "GVCN Lớp 5A1",
    type: "homeroom",
    assignedClasses: ["5A1"],
    subjects: ["Tiếng Việt", "Toán", "Khoa học", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },
  {
    id: "gv_nguyet_5a2",
    name: "Cô Nguyệt",
    role: "GVCN Lớp 5A2",
    type: "homeroom",
    assignedClasses: ["5A2"],
    subjects: ["Tiếng Việt", "Toán", "Khoa học", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },
  {
    id: "gv_nhien_5a3",
    name: "Cô Nhiên",
    role: "GVCN Lớp 5A3 (Kiêm Thư viện)",
    type: "homeroom",
    assignedClasses: ["5A3"],
    subjects: ["Tiếng Việt", "Toán", "Khoa học", "HĐTN"],
    teachingPeriods: 16,
    concurrentPeriods: 7,
    totalPeriods: 23,
  },
  {
    id: "gv_v_trinh_5a4",
    name: "Cô V. Trinh",
    role: "GVCN Lớp 5A4",
    type: "homeroom",
    assignedClasses: ["5A4"],
    subjects: ["Tiếng Việt", "Toán", "Khoa học", "HĐTN"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },

  // ================= 15 GV BỘ MÔN, CHUYÊN & BGH =================
  {
    id: "gv_tam_bm",
    name: "Cô Tâm",
    role: "GV Bộ môn TNXH & Tăng cường (Kiêm TVHS)",
    type: "specialist",
    specialistSubject: "Tự nhiên và Xã hội",
    assignedClasses: ["1A1", "2A1", "2A2", "2A3", "2A4", "3A1", "3A2", "3A4"],
    subjects: ["TNXH", "TCTV"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },
  {
    id: "gv_ngan_bm",
    name: "Cô Ngân",
    role: "GV Bộ môn Lịch sử - Địa lí (Kiêm ĐVP)",
    type: "specialist",
    specialistSubject: "Lịch sử và Địa lí",
    assignedClasses: ["4A1", "4A2", "4A3", "4A4", "5A1", "5A2", "5A3", "5A4"],
    subjects: ["LS&ĐL", "MT", "HĐTN"],
    teachingPeriods: 18,
    concurrentPeriods: 5,
    totalPeriods: 23,
  },
  {
    id: "gv_tho_bm",
    name: "Cô Thơ",
    role: "GV Bộ môn Tăng cường & Đạo đức (23 tiết)",
    type: "specialist",
    specialistSubject: "Tăng cường Tiếng Việt",
    assignedClasses: ["2A2", "2A3", "2A4", "3A2", "3A3", "3A4", "4A2", "4A3", "4A4", "5A2", "5A3", "5A4"],
    subjects: ["TCTV", "ĐĐ", "HĐTN", "CN", "TV"],
    teachingPeriods: 23,
    concurrentPeriods: 0,
    totalPeriods: 23,
  },
  {
    id: "gv_dung_bm",
    name: "Cô Dung",
    role: "GV Bộ môn Tăng cường & Đạo đức Khối 1-2 (23 tiết)",
    type: "specialist",
    specialistSubject: "Tăng cường Tiếng Việt",
    assignedClasses: ["1A1", "1A2", "1A3", "1A4", "2A1"],
    subjects: ["TCTV", "TCT", "ĐĐ", "Tiếng Việt"],
    teachingPeriods: 23,
    concurrentPeriods: 0,
    totalPeriods: 23,
  },
  {
    id: "gv_tu_trinh_bm",
    name: "Cô Tú Trinh",
    role: "GV Bộ môn Tăng cường & Kĩ năng (Giảm con nhỏ)",
    type: "specialist",
    specialistSubject: "Tăng cường Tiếng Việt",
    assignedClasses: ["1A1", "1A2", "1A4", "2A1", "2A2", "2A3", "2A4", "5A2", "5A3"],
    subjects: ["TCTV", "TCT", "HĐTN", "CN", "ĐĐ"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },
  {
    id: "gv_nhu_an",
    name: "Cô Như",
    role: "GV Chuyên Âm nhạc Toàn trường (23 tiết)",
    type: "specialist",
    specialistSubject: "Âm nhạc",
    assignedClasses: ["1A1", "1A2", "1A3", "1A4", "2A1", "2A2", "2A3", "2A4", "3A1", "3A2", "3A3", "3A4", "4A1", "4A2", "4A4", "5A1", "5A2", "5A3", "5A4"],
    subjects: ["AN", "BDAN", "Âm nhạc"],
    teachingPeriods: 23,
    concurrentPeriods: 0,
    totalPeriods: 23,
  },
  {
    id: "gv_danh_mt",
    name: "Thầy Dánh",
    role: "GV Chuyên Mĩ thuật Toàn trường (Giảm con nhỏ)",
    type: "specialist",
    specialistSubject: "Mĩ thuật",
    assignedClasses: ["1A1", "1A2", "1A3", "1A4", "2A1", "2A2", "2A3", "2A4", "3A1", "3A3", "3A4", "4A1", "4A4", "5A1", "5A2", "5A3"],
    subjects: ["MT", "Mĩ thuật"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },
  {
    id: "gv_toan_th",
    name: "Thầy Toàn",
    role: "GV Chuyên Tin học (TPCM + CNTT)",
    type: "specialist",
    specialistSubject: "Tin học",
    assignedClasses: ["1A1", "1A2", "1A3", "1A4", "2A1", "2A2", "2A3", "2A4", "3A2", "3A3", "3A4", "4A1", "4A3", "4A4", "5A1", "5A2", "5A3", "5A4"],
    subjects: ["TH", "Tin học"],
    teachingPeriods: 19,
    concurrentPeriods: 4,
    totalPeriods: 23,
  },
  {
    id: "gv_my_ta",
    name: "Cô My",
    role: "GV Chuyên Tiếng Anh (24 tiết - Thừa +1)",
    type: "specialist",
    specialistSubject: "Tiếng Anh",
    assignedClasses: ["3A1", "3A2", "3A3", "4A1", "4A3", "4A4", "5A1", "5A2"],
    subjects: ["TA", "Tiếng Anh"],
    teachingPeriods: 24,
    concurrentPeriods: 0,
    totalPeriods: 24,
  },
  {
    id: "gv_hang_ta",
    name: "Cô Hằng",
    role: "GV Chuyên Tiếng Anh (24 tiết - Thừa +1)",
    type: "specialist",
    specialistSubject: "Tiếng Anh",
    assignedClasses: ["3A1", "3A3", "3A4", "4A2", "4A3", "5A3", "5A4"],
    subjects: ["TA", "Tiếng Anh"],
    teachingPeriods: 24,
    concurrentPeriods: 0,
    totalPeriods: 24,
  },
  {
    id: "gv_sum_gdtc",
    name: "Thầy Sum",
    role: "GV Chuyên GDTC (TPCM Thể chất)",
    type: "specialist",
    specialistSubject: "Giáo dục Thể chất",
    assignedClasses: ["1A2", "1A3", "2A1", "3A1", "3A2", "3A4", "4A2", "4A3", "4A4", "5A1", "5A3", "5A4"],
    subjects: ["GDTC", "HĐTN"],
    teachingPeriods: 22,
    concurrentPeriods: 1,
    totalPeriods: 23,
  },
  {
    id: "gv_son_gdtc",
    name: "Thầy Sơn",
    role: "GV Chuyên GDTC (Kiêm Phụ trách Thiết bị)",
    type: "specialist",
    specialistSubject: "Giáo dục Thể chất",
    assignedClasses: ["1A1", "1A4", "2A2", "2A3", "2A4", "3A2", "3A3", "4A1", "4A2", "4A3", "5A2"],
    subjects: ["GDTC"],
    teachingPeriods: 20,
    concurrentPeriods: 3,
    totalPeriods: 23,
  },
  {
    id: "gv_duong_ht",
    name: "Trương Thị Kim Dương",
    role: "Hiệu trưởng (Dạy 2 tiết Đạo đức)",
    type: "specialist",
    specialistSubject: "Đạo đức",
    assignedClasses: ["3A1", "5A1"],
    subjects: ["Đạo đức", "ĐĐ"],
    teachingPeriods: 2,
    concurrentPeriods: 0,
    totalPeriods: 2,
  },
  {
    id: "gv_thuy_pht",
    name: "Lê Thị Hồng Thủy",
    role: "Phó Hiệu trưởng (Dạy 4 tiết Đạo đức Khối 2)",
    type: "specialist",
    specialistSubject: "Đạo đức",
    assignedClasses: ["2A1", "2A2", "2A3", "2A4"],
    subjects: ["Đạo đức", "ĐĐ"],
    teachingPeriods: 4,
    concurrentPeriods: 0,
    totalPeriods: 4,
  },
  {
    id: "gv_tuan_dd",
    name: "Lữ Văn Tuấn",
    role: "GV Bộ môn Đạo đức (Lớp 4A1, 4A2)",
    type: "specialist",
    specialistSubject: "Đạo đức",
    assignedClasses: ["4A1", "4A2"],
    subjects: ["Đạo đức", "ĐĐ"],
    teachingPeriods: 2,
    concurrentPeriods: 0,
    totalPeriods: 2,
  },
];

// Timetable Tuần 1 (07/09/2026 - 11/09/2026)
export const TIMETABLE_TUAN_1_SLOTS: Record<string, Record<string, string>> = {
  "Thứ Hai_Sáng_1": { "1A": "HĐTN (CC)", "1B": "HĐTN (CC)", "2A": "HĐTN (CC)", "2B": "HĐTN (CC)", "3A": "HĐTN (CC)", "3B": "HĐTN (CC)", "4A": "HĐTN (CC)", "4B": "HĐTN (CC)", "5A": "HĐTN (CC)", "5B": "HĐTN (CC)" },
  "Thứ Hai_Sáng_2": { "1A": "TV", "1B": "TV", "2A": "TV", "2B": "TV", "3A": "TV", "3B": "TV", "4A": "TV", "4B": "TV", "5A": "TV", "5B": "TV" },
  "Thứ Hai_Sáng_3": { "1A": "TV", "1B": "TV", "2A": "TV", "2B": "TV", "3A": "TV", "3B": "TV", "4A": "TV", "4B": "TV", "5A": "TV", "5B": "TV" },
  "Thứ Hai_Sáng_4": { "1A": "T", "1B": "T", "2A": "T", "2B": "T", "3A": "T", "3B": "T", "4A": "T", "4B": "T", "5A": "T", "5B": "T" },
  "Thứ Hai_Sáng_5": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },

  "Thứ Hai_Chiều_1": { "1A": "MT (Thy)", "1B": "TNXH (Phước)", "2A": "ĐĐ (Nhàn)", "2B": "TH (Phương)", "3A": "TA (Nương)", "3B": "ĐĐ", "4A": "AN (Tâm)", "4B": "LS-ĐL", "5A": "ĐĐ (Quan)", "5B": "LS-ĐL" },
  "Thứ Hai_Chiều_2": { "1A": "TV", "1B": "TV", "2A": "MT (Thy)", "2B": "TNXH (Phước)", "3A": "AN (Tâm)", "3B": "TH (Phương)", "4A": "GDTC (Thịnh)", "4B": "KH", "5A": "TA (Nương)", "5B": "KH" },
  "Thứ Hai_Chiều_3": { "1A": "TCTV", "1B": "TCTV", "2A": "AN (Tâm)", "2B": "ĐĐ (Nhàn)", "3A": "MT (Thy)", "3B": "TNXH (Phước)", "4A": "TA (Nương)", "4B": "TH (Phương)", "5A": "GDTC (Thịnh)", "5B": "ĐĐ (Quan)" },

  "Thứ Ba_Sáng_1": { "1A": "TV", "1B": "TV", "2A": "GDTC (Thịnh)", "2B": "TV", "3A": "TV", "3B": "AN (Tâm)", "4A": "TV", "4B": "TV", "5A": "TV", "5B": "TA (Nương)" },
  "Thứ Ba_Sáng_2": { "1A": "TV", "1B": "TV", "2A": "TV", "2B": "TV", "3A": "GDTC (Thịnh)", "3B": "TV", "4A": "T", "4B": "T", "5A": "T", "5B": "AN (Tâm)" },
  "Thứ Ba_Sáng_3": { "1A": "GDTC (Thịnh)", "1B": "AN (Tâm)", "2A": "TV", "2B": "MT (Thy)", "3A": "T", "3B": "T", "4A": "LS-ĐL", "4B": "TA (Nương)", "5A": "LS-ĐL", "5B": "TV" },
  "Thứ Ba_Sáng_4": { "1A": "TH (Phương)", "1B": "MT (Thy)", "2A": "T", "2B": "AN (Tâm)", "3A": "ĐĐ", "3B": "TA (Nương)", "4A": "KH", "4B": "CN (Nhàn)", "5A": "KH", "5B": "T" },
  "Thứ Ba_Sáng_5": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },

  "Thứ Ba_Chiều_1": { "1A": "TNXH (Phước)", "1B": "ĐĐ (Nhàn)", "2A": "BDAN (Tâm)", "2B": "TV", "3A": "TA (Nương)", "3B": "MT (Thy)", "4A": "TH (Phương)", "4B": "GDTC (Thịnh)", "5A": "TCTV", "5B": "KH" },
  "Thứ Ba_Chiều_2": { "1A": "TCTV", "1B": "TV", "2A": "TNXH (Phước)", "2B": "TCTV", "3A": "BDAN (Tâm)", "3B": "GDTC (Thịnh)", "4A": "TA (Nương)", "4B": "KH", "5A": "TH (Phương)", "5B": "MT (Thy)" },
  "Thứ Ba_Chiều_3": { "1A": "AN (Tâm)", "1B": "T", "2A": "TH (Phương)", "2B": "TCT (Nhàn)", "3A": "TNXH (Phước)", "3B": "CN", "4A": "ĐĐ (Quan)", "4B": "MT (Thy)", "5A": "TA (Nương)", "5B": "GDTC (Thịnh)" },

  "Thứ Tư_Sáng_1": { "1A": "TV", "1B": "TV", "2A": "TV", "2B": "GDTC (Thịnh)", "3A": "TA (Nương)", "3B": "TV", "4A": "MT (Thy)", "4B": "TV", "5A": "TV", "5B": "CN (Nhàn)" },
  "Thứ Tư_Sáng_2": { "1A": "TV", "1B": "TCT (Phước)", "2A": "TV", "2B": "TCT (Nhàn)", "3A": "HĐTN (Thy)", "3B": "GDTC (Thịnh)", "4A": "TA (Nương)", "4B": "T", "5A": "T", "5B": "TV" },
  "Thứ Tư_Sáng_3": { "1A": "T", "1B": "GDTC (Thịnh)", "2A": "TNXH (Phước)", "2B": "TV", "3A": "TV", "3B": "BDAN (Tâm)", "4A": "TV", "4B": "HĐTN (Thy)", "5A": "CN (Nhàn)", "5B": "T" },
  "Thứ Tư_Sáng_4": { "1A": "TNXH (Phước)", "1B": "HĐTN (Thy)", "2A": "TCTV (Nhàn)", "2B": "TV", "3A": "T", "3B": "T", "4A": "T", "4B": "AN (Tâm)", "5A": "TA (Nương)", "5B": "TH (Phương)" },
  "Thứ Tư_Sáng_5": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },

  "Thứ Tư_Chiều_1": { "1A": "TV", "1B": "TV", "2A": "T", "2B": "BDAN (Tâm)", "3A": "TNXH (Phước)", "3B": "HĐTN (Thy)", "4A": "CN (Nhàn)", "4B": "LS-ĐL", "5A": "LS-ĐL", "5B": "TA (Nương)" },
  "Thứ Tư_Chiều_2": { "1A": "TCT (Phước)", "1B": "TV", "2A": "TCTV (Nhàn)", "2B": "HĐTN (Thy)", "3A": "CN", "3B": "TA (Nương)", "4A": "LS-ĐL", "4B": "BDAN (Tâm)", "5A": "KH", "5B": "GDTC (Thịnh)" },
  "Thứ Tư_Chiều_3": { "1A": "ĐĐ (Nhàn)", "1B": "TNXH (Phước)", "2A": "HĐTN (Thy)", "2B": "GDTC (Thịnh)", "3A": "TH (Phương)", "3B": "TCTV", "4A": "KH", "4B": "TA (Nương)", "5A": "AN (Tâm)", "5B": "LS-ĐL" },

  "Thứ Năm_Sáng_1": { "1A": "GDTC (Thịnh)", "1B": "BDAN (Tâm)", "2A": "T", "2B": "TV", "3A": "TV", "3B": "TV", "4A": "TV", "4B": "TA (Nương)", "5A": "TV", "5B": "TV" },
  "Thứ Năm_Sáng_2": { "1A": "HĐTN (Thy)", "1B": "TV", "2A": "GDTC (Thịnh)", "2B": "TV", "3A": "TV", "3B": "TNXH (Phước)", "4A": "TV", "4B": "T", "5A": "TV", "5B": "TV" },
  "Thứ Năm_Sáng_3": { "1A": "TV", "1B": "TCT (Phước)", "2A": "TV", "2B": "TCT (Nhàn)", "3A": "TA (Nương)", "3B": "TV", "4A": "GDTC (Thịnh)", "4B": "TV", "5A": "T", "5B": "T" },
  "Thứ Năm_Sáng_4": { "1A": "TV", "1B": "TCTV (Nhàn)", "2A": "TV", "2B": "TNXH (Phước)", "3A": "T", "3B": "T", "4A": "T", "4B": "TV", "5A": "TA (Nương)", "5B": "HĐTN (Thy)" },
  "Thứ Năm_Sáng_5": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },

  "Thứ Năm_Chiều_1": { "1A": "BDAN (Tâm)", "1B": "TH (Phương)", "2A": "TCT (Phước)", "2B": "TV", "3A": "TCTV", "3B": "TCTV", "4A": "TCTV", "4B": "TV", "5A": "HĐTN (Thy)", "5B": "TA (Nương)" },
  "Thứ Năm_Chiều_2": { "1A": "TCTV (Nhàn)", "1B": "TV", "2A": "T", "2B": "T", "3A": "GDTC (Thịnh)", "3B": "TCT", "4A": "BDAN (Tâm)", "4B": "TA (Nương)", "5A": "MT (Thy)", "5B": "TCTV" },
  "Thứ Năm_Chiều_3": { "1A": "TCT (Phước)", "1B": "T", "2A": "TCTV (Nhàn)", "2B": "TCTV", "3A": "TCT", "3B": "TA (Nương)", "4A": "HĐTN (Thy)", "4B": "ĐĐ (Quan)", "5A": "GDTC (Thịnh)", "5B": "BDAN (Tâm)" },

  "Thứ Sáu_Sáng_1": { "1A": "TV", "1B": "TCT (Phước)", "2A": "TV", "2B": "T", "3A": "TV", "3B": "TA (Nương)", "4A": "TV", "4B": "GDTC (Thịnh)", "5A": "BDAN (Tâm)", "5B": "TV" },
  "Thứ Sáu_Sáng_2": { "1A": "TV", "1B": "GDTC (Thịnh)", "2A": "TV", "2B": "TV", "3A": "T", "3B": "T", "4A": "T", "4B": "TV", "5A": "TV", "5B": "TA (Nương)" },
  "Thứ Sáu_Sáng_3": { "1A": "T", "1B": "TV", "2A": "TCT (Phước)", "2B": "TV", "3A": "TCTV", "3B": "TV", "4A": "TA (Nương)", "4B": "T", "5A": "T", "5B": "T" },
  "Thứ Sáu_Sáng_4": { "1A": "HĐTN (SHL)", "1B": "HĐTN (SHL)", "2A": "HĐTN (SHL)", "2B": "HĐTN (SHL)", "3A": "HĐTN (SHL)", "3B": "HĐTN (SHL)", "4A": "HĐTN (SHL)", "4B": "HĐTN (SHL)", "5A": "HĐTN (SHL)", "5B": "HĐTN (SHL)" },
  "Thứ Sáu_Sáng_5": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },

  "Thứ Sáu_Chiều_1": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },
  "Thứ Sáu_Chiều_2": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },
  "Thứ Sáu_Chiều_3": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },
};

// ==============================================================================
// THỜI KHÓA BIỂU CHÍNH THỨC TRƯỜNG TIỂU HỌC TÂN THẠNH (TRƯỜNG CHÍNH)
// Áp dụng từ Tuần 1 đến Tuần 4 - Năm học 2026 - 2027 (Ký duyệt: HT Trương Thị Kim Dương, 03/09/2026)
// Đồng bộ 20 lớp (1A1 - 5A4) và 35 Giáo viên
// ==============================================================================
export const TIMETABLE_TRUONG_CHINH_2026_SLOTS: Record<string, Record<string, string>> = {
  // THỨ HAI
  "Thứ Hai_Sáng_1": {
    "1A1": "HĐTN (CC)", "1A2": "HĐTN (CC)", "1A3": "HĐTN (CC)", "1A4": "HĐTN (CC)",
    "2A1": "HĐTN (CC)", "2A2": "HĐTN (CC)", "2A3": "HĐTN (CC)", "2A4": "HĐTN (CC)",
    "3A1": "HĐTN (CC)", "3A2": "HĐTN (CC)", "3A3": "HĐTN (CC)", "3A4": "HĐTN (CC)",
    "4A1": "HĐTN (CC)", "4A2": "HĐTN (CC)", "4A3": "HĐTN (CC)", "4A4": "HĐTN (CC)",
    "5A1": "HĐTN (CC)", "5A2": "HĐTN (CC)", "5A3": "HĐTN (CC)", "5A4": "HĐTN (CC)",
  },
  "Thứ Hai_Sáng_2": {
    "1A1": "Tiếng Việt", "1A2": "Tiếng Việt", "1A3": "Tiếng Việt", "1A4": "Tiếng Việt",
    "2A1": "TNXH (Tâm)", "2A2": "Tiếng Việt", "2A3": "Tiếng Việt", "2A4": "Tiếng Việt",
    "3A1": "Tiếng Việt", "3A2": "Tiếng Việt", "3A3": "Tiếng Việt", "3A4": "Toán",
    "4A1": "Tiếng Việt", "4A2": "Tiếng Việt", "4A3": "Tiếng Việt", "4A4": "Toán",
    "5A1": "Tiếng Việt", "5A2": "Toán", "5A3": "LS&ĐL (Ngân)", "5A4": "Toán",
  },
  "Thứ Hai_Sáng_3": {
    "1A1": "Tiếng Việt", "1A2": "Tiếng Việt", "1A3": "Tiếng Việt", "1A4": "Tiếng Việt",
    "2A1": "Toán", "2A2": "Tiếng Việt", "2A3": "Tiếng Việt", "2A4": "TNXH (Tâm)",
    "3A1": "Tiếng Việt", "3A2": "Tiếng Việt", "3A3": "Tiếng Việt", "3A4": "GDTC (Sum)",
    "4A1": "Tiếng Việt", "4A2": "Tiếng Việt", "4A3": "Tiếng Việt", "4A4": "TA (My)",
    "5A1": "Tiếng Việt", "5A2": "LS&ĐL (Ngân)", "5A3": "Toán", "5A4": "TA (Hằng)",
  },
  "Thứ Hai_Sáng_4": {
    "1A1": "Toán", "1A2": "Toán", "1A3": "Toán", "1A4": "Tiếng Việt",
    "2A1": "Tiếng Việt", "2A2": "Toán", "2A3": "TC TV (Thơ)", "2A4": "Tiếng Việt",
    "3A1": "Toán", "3A2": "Toán", "3A3": "Toán", "3A4": "TC Toán",
    "4A1": "Toán", "4A2": "HĐTN (Sum)", "4A3": "Toán", "4A4": "TA (My)",
    "5A1": "LS&ĐL (Ngân)", "5A2": "Khoa học", "5A3": "TA (Hằng)", "5A4": "TA (Hằng)",
  },
  "Thứ Hai_Sáng_5": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "", "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "", "4A1": "", "4A2": "", "4A3": "", "4A4": "",
    "5A1": "", "5A2": "", "5A3": "", "5A4": "",
  },

  "Thứ Hai_Chiều_1": {
    "1A1": "Toán", "1A2": "TNXH", "1A3": "TNXH", "1A4": "HĐTN (Trinh)",
    "2A1": "AN (Như)", "2A2": "MT (Dánh)", "2A3": "Toán", "2A4": "Toán",
    "3A1": "TA (Hằng)", "3A2": "TC Tiếng Việt", "3A3": "TC Tiếng Việt", "3A4": "ĐĐ (Thơ)",
    "4A1": "TA (My)", "4A2": "Toán", "4A3": "HĐTN (Sum)", "4A4": "HĐTN",
    "5A1": "Toán", "5A2": "GDTC (Sơn)", "5A3": "Tiếng Việt", "5A4": "Tiếng Việt",
  },
  "Thứ Hai_Chiều_2": {
    "1A1": "Tiếng Việt", "1A2": "TH (Toàn)", "1A3": "ĐĐ (Dung)", "1A4": "MT (Dánh)",
    "2A1": "TC TV (Trinh)", "2A2": "TNXH (Tâm)", "2A3": "Tiếng Việt", "2A4": "GDTC (Sơn)",
    "3A1": "TC Tiếng Việt", "3A2": "AN (Như)", "3A3": "TC Toán", "3A4": "Tiếng Việt",
    "4A1": "TA (My)", "4A2": "Tiếng Việt", "4A3": "TA (Hằng)", "4A4": "GDTC (Sum)",
    "5A1": "TC Tiếng Việt", "5A2": "ĐĐ (Thơ)", "5A3": "Tiếng Việt", "5A4": "Tiếng Việt",
  },
  "Thứ Hai_Chiều_3": {
    "1A1": "Tiếng Việt", "1A2": "MT (Dánh)", "1A3": "TC TV (Dung)", "1A4": "TNXH",
    "2A1": "TC T (Trinh)", "2A2": "TNXH (Tâm)", "2A3": "Tiếng Việt", "2A4": "TC Tiếng Việt",
    "3A1": "TC Toán", "3A2": "TC Toán", "3A3": "AN (Như)", "3A4": "Tiếng Việt",
    "4A1": "GDTC (Sơn)", "4A2": "Tiếng Việt", "4A3": "TA (Hằng)", "4A4": "TH (Toàn)",
    "5A1": "GDTC (Sum)", "5A2": "HĐTN (Thơ)", "5A3": "Khoa học", "5A4": "Khoa học",
  },

  // THỨ BA
  "Thứ Ba_Sáng_1": {
    "1A1": "HĐTN (Trinh)", "1A2": "TC TV (Dung)", "1A3": "TH (Toàn)", "1A4": "Tiếng Việt",
    "2A1": "Tiếng Việt", "2A2": "GDTC (Sơn)", "2A3": "Toán", "2A4": "Tiếng Việt",
    "3A1": "TA (Hằng)", "3A2": "Toán", "3A3": "Toán", "3A4": "Tiếng Việt",
    "4A1": "Tiếng Việt", "4A2": "Toán", "4A3": "Toán", "4A4": "Tiếng Việt",
    "5A1": "Toán", "5A2": "TA (My)", "5A3": "ĐĐ (Thơ)", "5A4": "GDTC (Sum)",
  },
  "Thứ Ba_Sáng_2": {
    "1A1": "ĐĐ (Dung)", "1A2": "GDTC (Sum)", "1A3": "Tiếng Việt", "1A4": "GDTC (Sơn)",
    "2A1": "Tiếng Việt", "2A2": "Tiếng Việt", "2A3": "AN (Như)", "2A4": "Tiếng Việt",
    "3A1": "TA (Hằng)", "3A2": "TH (Toàn)", "3A3": "TC Tiếng Việt", "3A4": "Tiếng Việt",
    "4A1": "Tiếng Việt", "4A2": "Khoa học", "4A3": "Khoa học", "4A4": "Tiếng Việt",
    "5A1": "Khoa học", "5A2": "TA (My)", "5A3": "CN (Trinh)", "5A4": "ĐĐ (Thơ)",
  },
  "Thứ Ba_Sáng_3": {
    "1A1": "Tiếng Việt", "1A2": "Tiếng Việt", "1A3": "TC TV (Dung)", "1A4": "Tiếng Việt",
    "2A1": "Toán", "2A2": "TC TV (Thơ)", "2A3": "TC Tiếng Việt", "2A4": "AN (Như)",
    "3A1": "Tiếng Việt", "3A2": "GDTC (Sum)", "3A3": "GDTC (Sơn)", "3A4": "TA (Hằng)",
    "4A1": "Toán", "4A2": "ĐĐ (Tuấn)", "4A3": "TH (Toàn)", "4A4": "Toán",
    "5A1": "ĐĐ (Dương)", "5A2": "Tiếng Việt", "5A3": "Toán", "5A4": "Toán",
  },
  "Thứ Ba_Sáng_4": {
    "1A1": "Tiếng Việt", "1A2": "Tiếng Việt", "1A3": "Tiếng Việt", "1A4": "TC TV (Dung)",
    "2A1": "TC Tiếng Việt", "2A2": "Tiếng Việt", "2A3": "TC TV (Trinh)", "2A4": "Tiếng Việt",
    "3A1": "TC Tiếng Việt", "3A2": "ĐĐ (Thơ)", "3A3": "TA (Hằng)", "3A4": "TA (Hằng)",
    "4A1": "Tin học", "4A2": "AN (Như)", "4A3": "TA (My)", "4A4": "Tiếng Việt",
    "5A1": "TA (My)", "5A2": "Tiếng Việt", "5A3": "Khoa học", "5A4": "TC Tiếng Việt",
  },
  "Thứ Ba_Sáng_5": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "", "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "", "4A1": "", "4A2": "", "4A3": "", "4A4": "",
    "5A1": "", "5A2": "", "5A3": "", "5A4": "",
  },

  "Thứ Ba_Chiều_1": {
    "1A1": "AN (Như)", "1A2": "HĐTN (Trinh)", "1A3": "GDTC (Sum)", "1A4": "ĐĐ (Dung)",
    "2A1": "TH (Toàn)", "2A2": "Toán", "2A3": "Tiếng Việt", "2A4": "Toán",
    "3A1": "Toán", "3A2": "TA (My)", "3A3": "MT (Dánh)", "3A4": "TNXH (Tâm)",
    "4A1": "Khoa học", "4A2": "GDTC (Sơn)", "4A3": "ĐĐ (Thơ)", "4A4": "Khoa học",
    "5A1": "Tiếng Việt", "5A2": "Toán", "5A3": "LS&ĐL (Ngân)", "5A4": "TA (Hằng)",
  },
  "Thứ Ba_Chiều_2": {
    "1A1": "MT (Dánh)", "1A2": "AN (Như)", "1A3": "HĐTN (Trinh)", "1A4": "TC T (Dung)",
    "2A1": "GDTC (Sum)", "2A2": "TC Toán", "2A3": "Tiếng Việt", "2A4": "Tiếng Việt",
    "3A1": "ĐĐ (Dương)", "3A2": "TA (My)", "3A3": "TH (Toàn)", "3A4": "Toán",
    "4A1": "Công nghệ", "4A2": "TA (Hằng)", "4A3": "GDTC (Sơn)", "4A4": "Tiếng Việt",
    "5A1": "Tiếng Việt", "5A2": "Công nghệ", "5A3": "HĐTN (Thơ)", "5A4": "LS&ĐL (Ngân)",
  },
  "Thứ Ba_Chiều_3": {
    "1A1": "GDTC (Sơn)", "1A2": "ĐĐ (Trinh)", "1A3": "AN (Như)", "1A4": "TH (Toàn)",
    "2A1": "Tiếng Việt", "2A2": "TC Tiếng Việt", "2A3": "Tiếng Việt", "2A4": "TNXH (Tâm)",
    "3A1": "MT (Dánh)", "3A2": "TA (My)", "3A3": "TC Tiếng Việt", "3A4": "TC Tiếng Việt",
    "4A1": "TC Toán", "4A2": "TA (Hằng)", "4A3": "LS&ĐL (Ngân)", "4A4": "Tiếng Việt",
    "5A1": "Công nghệ", "5A2": "TC Tiếng Việt", "5A3": "GDTC (Sum)", "5A4": "HĐTN (Thơ)",
  },

  // THỨ TƯ
  "Thứ Tư_Sáng_1": {
    "1A1": "Tiếng Việt", "1A2": "TC TV (Dung)", "1A3": "Tiếng Việt", "1A4": "Tiếng Việt",
    "2A1": "Toán", "2A2": "Tiếng Việt", "2A3": "Toán", "2A4": "Toán",
    "3A1": "AN (Như)", "3A2": "ĐĐ (Thơ)", "3A3": "Tiếng Việt", "3A4": "TNXH (Tâm)",
    "4A1": "Toán", "4A2": "Toán", "4A3": "TA (Hằng)", "4A4": "TA (My)",
    "5A1": "TH (Toàn)", "5A2": "GDTC (Sơn)", "5A3": "Tiếng Việt", "5A4": "Tiếng Việt",
  },
  "Thứ Tư_Sáng_2": {
    "1A1": "Tiếng Việt", "1A2": "TC TV (Dung)", "1A3": "Tiếng Việt", "1A4": "Tiếng Việt",
    "2A1": "TC Tiếng Việt", "2A2": "Tiếng Việt", "2A3": "GDTC (Sơn)", "2A4": "TC Tiếng Việt",
    "3A1": "MT (Dánh)", "3A2": "HĐTN (Thơ)", "3A3": "Tiếng Việt", "3A4": "Toán",
    "4A1": "AN (Như)", "4A2": "Khoa học", "4A3": "TA (Hằng)", "4A4": "TA (My)",
    "5A1": "Tiếng Việt", "5A2": "TH (Toàn)", "5A3": "Tiếng Việt", "5A4": "Tiếng Việt",
  },
  "Thứ Tư_Sáng_3": {
    "1A1": "TC TV (Dung)", "1A2": "Tiếng Việt", "1A3": "Toán", "1A4": "AN (Như)",
    "2A1": "MT (Dánh)", "2A2": "Toán", "2A3": "Tiếng Việt", "2A4": "TC TV (Trinh)",
    "3A1": "Toán", "3A2": "Tiếng Việt", "3A3": "TA (My)", "3A4": "Công nghệ",
    "4A1": "Tiếng Việt", "4A2": "TV (Thơ)", "4A3": "Toán", "4A4": "Tiếng Việt",
    "5A1": "Tiếng Việt", "5A2": "Tiếng Việt", "5A3": "TA (Hằng)", "5A4": "TH (Toàn)",
  },
  "Thứ Tư_Sáng_4": {
    "1A1": "TC TV (Dung)", "1A2": "Tiếng Việt", "1A3": "MT (Dánh)", "1A4": "Toán",
    "2A1": "ĐĐ (Thủy)", "2A2": "AN (Như)", "2A3": "Tiếng Việt", "2A4": "TC T (Trinh)",
    "3A1": "TC Tiếng Việt", "3A2": "Tiếng Việt", "3A3": "TA (My)", "3A4": "TH (Toàn)",
    "4A1": "Tiếng Việt", "4A2": "TC T (Thơ)", "4A3": "Khoa học", "4A4": "Tiếng Việt",
    "5A1": "Toán", "5A2": "Tiếng Việt", "5A3": "TA (Hằng)", "5A4": "Toán",
  },
  "Thứ Tư_Sáng_5": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "", "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "", "4A1": "", "4A2": "", "4A3": "", "4A4": "",
    "5A1": "", "5A2": "", "5A3": "", "5A4": "",
  },

  "Thứ Tư_Chiều_1": {
    "1A1": "Toán", "1A2": "Toán", "1A3": "TNXH", "1A4": "TC TV (Dung)",
    "2A1": "HĐTN (Trinh)", "2A2": "ĐĐ (Thủy)", "2A3": "TH (Toàn)", "2A4": "GDTC (Sơn)",
    "3A1": "GDTC (Sum)", "3A2": "Toán", "3A3": "TNXH (Tâm)", "3A4": "AN (Như)",
    "4A1": "MT (Dánh)", "4A2": "TA (Hằng)", "4A3": "Công nghệ", "4A4": "LS&ĐL (Ngân)",
    "5A1": "TA (My)", "5A2": "Toán", "5A3": "Toán", "5A4": "Tiếng Việt",
  },
  "Thứ Tư_Chiều_2": {
    "1A1": "Tiếng Việt", "1A2": "BDAN (Như)", "1A3": "TC TV (Dung)", "1A4": "Tiếng Việt",
    "2A1": "TC TV (Trinh)", "2A2": "GDTC (Sơn)", "2A3": "ĐĐ (Thủy)", "2A4": "TH (Toàn)",
    "3A1": "TNXH (Tâm)", "3A2": "GDTC (Sum)", "3A3": "Toán", "3A4": "MT (Dánh)",
    "4A1": "ĐĐ (Tuấn)", "4A2": "TA (Hằng)", "4A3": "LS&ĐL (Ngân)", "4A4": "Toán",
    "5A1": "TA (My)", "5A2": "Tiếng Việt", "5A3": "Tiếng Việt", "5A4": "Tiếng Việt",
  },
  "Thứ Tư_Chiều_3": {
    "1A1": "Tiếng Việt", "1A2": "TNXH", "1A3": "TC T (Dung)", "1A4": "Tiếng Việt",
    "2A1": "TC T (Trinh)", "2A2": "TH (Toàn)", "2A3": "MT (Dánh)", "2A4": "ĐĐ (Thủy)",
    "3A1": "TA (Hằng)", "3A2": "TNXH (Tâm)", "3A3": "TC Toán", "3A4": "GDTC (Sum)",
    "4A1": "LS&ĐL (Ngân)", "4A2": "AN (Như)", "4A3": "TC Tiếng Việt", "4A4": "Công nghệ",
    "5A1": "TA (My)", "5A2": "Tiếng Việt", "5A3": "Tiếng Việt", "5A4": "Công nghệ",
  },

  // THỨ NĂM
  "Thứ Năm_Sáng_1": {
    "1A1": "TNXH (Tâm)", "1A2": "Tiếng Việt", "1A3": "BDAN (Như)", "1A4": "TNXH",
    "2A1": "GDTC (Sum)", "2A2": "Toán", "2A3": "TC T (Trinh)", "2A4": "Tiếng Việt",
    "3A1": "Toán", "3A2": "Toán", "3A3": "Tiếng Việt", "3A4": "Tiếng Việt",
    "4A1": "TA (My)", "4A2": "CN (Thơ)", "4A3": "GDTC (Sơn)", "4A4": "MT (Dánh)",
    "5A1": "LS&ĐL (Ngân)", "5A2": "Toán", "5A3": "Toán", "5A4": "Toán",
  },
  "Thứ Năm_Sáng_2": {
    "1A1": "Tiếng Việt", "1A2": "Tiếng Việt", "1A3": "GDTC (Sum)", "1A4": "TC TV (Dung)",
    "2A1": "TNXH (Tâm)", "2A2": "TC T (Trinh)", "2A3": "TC TV (Thơ)", "2A4": "Tiếng Việt",
    "3A1": "TH (Toàn)", "3A2": "TC Toán", "3A3": "Tiếng Việt", "3A4": "Tiếng Việt",
    "4A1": "TA (My)", "4A2": "GDTC (Sơn)", "4A3": "MT (Dánh)", "4A4": "Toán",
    "5A1": "AN (Như)", "5A2": "Khoa học", "5A3": "Tiếng Việt", "5A4": "LS&ĐL (Ngân)",
  },
  "Thứ Năm_Sáng_3": {
    "1A1": "TC TV (Dung)", "1A2": "GDTC (Sum)", "1A3": "Tiếng Việt", "1A4": "Tiếng Việt",
    "2A1": "Tiếng Việt", "2A2": "TC TV (Tâm)", "2A3": "Toán", "2A4": "HĐTN (Thơ)",
    "3A1": "TA (My)", "3A2": "GDTC (Sơn)", "3A3": "Toán", "3A4": "Toán",
    "4A1": "Toán", "4A2": "Tiếng Việt", "4A3": "Tiếng Việt", "4A4": "LS&ĐL (Ngân)",
    "5A1": "Toán", "5A2": "AN (Như)", "5A3": "TH (Toàn)", "5A4": "MT (Dánh)",
  },
  "Thứ Năm_Sáng_4": {
    "1A1": "TC T (Trinh)", "1A2": "TC TV (Dung)", "1A3": "Tiếng Việt", "1A4": "Tiếng Việt",
    "2A1": "Tiếng Việt", "2A2": "Tiếng Việt", "2A3": "Tiếng Việt", "2A4": "MT (Dánh)",
    "3A1": "TC Toán", "3A2": "TA (My)", "3A3": "Toán", "3A4": "HĐTN (Thơ)",
    "4A1": "GDTC (Sơn)", "4A2": "Tiếng Việt", "4A3": "Tiếng Việt", "4A4": "Khoa học",
    "5A1": "Khoa học", "5A2": "LS&ĐL (Ngân)", "5A3": "AN (Như)", "5A4": "Khoa học",
  },
  "Thứ Năm_Sáng_5": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "", "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "", "4A1": "", "4A2": "", "4A3": "", "4A4": "",
    "5A1": "", "5A2": "", "5A3": "", "5A4": "",
  },

  "Thứ Năm_Chiều_1": {
    "1A1": "BDAN (Như)", "1A2": "Tiếng Việt", "1A3": "Tiếng Việt", "1A4": "TC TV (Dung)",
    "2A1": "Toán", "2A2": "Tiếng Việt", "2A3": "GDTC (Sơn)", "2A4": "TNXH (Tâm)",
    "3A1": "Tiếng Việt", "3A2": "Tiếng Việt", "3A3": "Công nghệ", "3A4": "Tiếng Việt",
    "4A1": "HĐTN", "4A2": "LS&ĐL (Ngân)", "4A3": "Toán", "4A4": "ĐĐ (Thơ)",
    "5A1": "GDTC (Sum)", "5A2": "TA (My)", "5A3": "MT (Dánh)", "5A4": "TA (Hằng)",
  },
  "Thứ Năm_Chiều_2": {
    "1A1": "TH (Toàn)", "1A2": "Tiếng Việt", "1A3": "Tiếng Việt", "1A4": "GDTC (Sơn)",
    "2A1": "Tiếng Việt", "2A2": "HĐTN (Thơ)", "2A3": "TNXH (Tâm)", "2A4": "Toán",
    "3A1": "Tiếng Việt", "3A2": "Tiếng Việt", "3A3": "TA (My)", "3A4": "TC Tiếng Việt",
    "4A1": "Khoa học", "4A2": "Toán", "4A3": "Tiếng Việt", "4A4": "GDTC (Sum)",
    "5A1": "HĐTN (Ngân)", "5A2": "MT (Dánh)", "5A3": "TA (Hằng)", "5A4": "AN (Như)",
  },
  "Thứ Năm_Chiều_3": {
    "1A1": "GDTC (Sơn)", "1A2": "Toán", "1A3": "Toán", "1A4": "TC T (Dung)",
    "2A1": "Tiếng Việt", "2A2": "Tiếng Việt", "2A3": "TNXH (Tâm)", "2A4": "Tiếng Việt",
    "3A1": "Công nghệ", "3A2": "Công nghệ", "3A3": "HĐTN (Thơ)", "3A4": "TC Toán",
    "4A1": "TH (Toàn)", "4A2": "MT (Ngân)", "4A3": "Tiếng Việt", "4A4": "AN (Như)",
    "5A1": "MT (Dánh)", "5A2": "TA (My)", "5A3": "TA (Hằng)", "5A4": "GDTC (Sum)",
  },

  // THỨ SÁU
  "Thứ Sáu_Sáng_1": {
    "1A1": "Tiếng Việt (Dung)", "1A2": "Tiếng Việt", "1A3": "Tiếng Việt", "1A4": "Tiếng Việt",
    "2A1": "Tiếng Việt", "2A2": "Tiếng Việt", "2A3": "HĐTN (Thơ)", "2A4": "Toán",
    "3A1": "Toán", "3A2": "TNXH (Tâm)", "3A3": "Toán", "3A4": "TA (Hằng)",
    "4A1": "Toán", "4A2": "LS&ĐL (Ngân)", "4A3": "Toán", "4A4": "Toán",
    "5A1": "Toán", "5A2": "Toán", "5A3": "GDTC (Sum)", "5A4": "Toán",
  },
  "Thứ Sáu_Sáng_2": {
    "1A1": "TNXH (Tâm)", "1A2": "TC T (Dung)", "1A3": "Tiếng Việt", "1A4": "Tiếng Việt",
    "2A1": "Tiếng Việt", "2A2": "Toán", "2A3": "Toán", "2A4": "HĐTN (Trinh)",
    "3A1": "GDTC (Sum)", "3A2": "Toán", "3A3": "Tiếng Việt", "3A4": "TA (Hằng)",
    "4A1": "LS&ĐL (Ngân)", "4A2": "Toán", "4A3": "Tiếng Việt", "4A4": "Tiếng Việt",
    "5A1": "Tiếng Việt", "5A2": "Tiếng Việt", "5A3": "Toán", "5A4": "Tiếng Việt",
  },
  "Thứ Sáu_Sáng_3": {
    "1A1": "Toán", "1A2": "Tiếng Việt", "1A3": "Toán", "1A4": "Toán",
    "2A1": "TC TV (Dung)", "2A2": "Tiếng Việt", "2A3": "Tiếng Việt", "2A4": "Tiếng Việt",
    "3A1": "Tiếng Việt", "3A2": "TNXH (Tâm)", "3A3": "Toán", "3A4": "Toán",
    "4A1": "Tiếng Việt", "4A2": "TC Toán", "4A3": "TC Toán", "4A4": "TC Toán",
    "5A1": "TC Toán", "5A2": "TC T (Trinh)", "5A3": "TC Toán", "5A4": "TC Toán",
  },
  "Thứ Sáu_Sáng_4": {
    "1A1": "HĐTN (SHL)", "1A2": "HĐTN (SHL)", "1A3": "HĐTN (SHL)", "1A4": "HĐTN (SHL)",
    "2A1": "HĐTN (SHL)", "2A2": "HĐTN (SHL)", "2A3": "HĐTN (SHL)", "2A4": "HĐTN (SHL)",
    "3A1": "HĐTN (SHL)", "3A2": "HĐTN (SHL)", "3A3": "HĐTN (SHL)", "3A4": "HĐTN (SHL)",
    "4A1": "HĐTN (SHL)", "4A2": "HĐTN (SHL)", "4A3": "HĐTN (SHL)", "4A4": "HĐTN (SHL)",
    "5A1": "HĐTN (SHL)", "5A2": "HĐTN (SHL)", "5A3": "HĐTN (SHL)", "5A4": "HĐTN (SHL)",
  },
  "Thứ Sáu_Sáng_5": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "", "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "", "4A1": "", "4A2": "", "4A3": "", "4A4": "",
    "5A1": "", "5A2": "", "5A3": "", "5A4": "",
  },

  "Thứ Sáu_Chiều_1": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "", "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "", "4A1": "", "4A2": "", "4A3": "", "4A4": "",
    "5A1": "", "5A2": "", "5A3": "", "5A4": "",
  },
  "Thứ Sáu_Chiều_2": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "", "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "", "4A1": "", "4A2": "", "4A3": "", "4A4": "",
    "5A1": "", "5A2": "", "5A3": "", "5A4": "",
  },
  "Thứ Sáu_Chiều_3": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "", "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "", "4A1": "", "4A2": "", "4A3": "", "4A4": "",
    "5A1": "", "5A2": "", "5A3": "", "5A4": "",
  },
};

// Aliased for backward compatibility
export const TIMETABLE_TUAN_2_SLOTS = TIMETABLE_TRUONG_CHINH_2026_SLOTS;

// Master timetable matrix based on the uploaded official school timetable (Tuần 1 đến Tuần 4 - Năm học 2026-2027)
export const DEFAULT_MASTER_TIMETABLE: MasterTimetable = {
  schoolName: "Trường Tiểu Học Tân Thạnh",
  effectiveDate: "Áp dụng từ Tuần 1 đến Tuần 4 (Năm học 2026 - 2027)",
  version: "2026_v10_official_truong_chinh_tkb_sync",
  classes: DEFAULT_CLASSES,
  slots: TIMETABLE_TRUONG_CHINH_2026_SLOTS,
};

export const DAYS_OF_WEEK: DayOfWeek[] = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu"];

// Academic Year 2026 - 2027 Start Date (Week 1 = Monday 07/09/2026)
export const ACADEMIC_YEAR_START_DATE = "07/09/2026";

export interface WeekDateRange {
  week: number;
  startDate: string; // dd/mm/yyyy (Monday / Thứ Hai)
  endDate: string;   // dd/mm/yyyy (Friday / Thứ Sáu)
  dates: string[];   // [T2, T3, T4, T5, T6] in "dd/mm/yyyy"
  datesShort: string[]; // [T2, T3, T4, T5, T6] in "dd/mm"
  label: string;
}

// Robust date string parser (accepts dd/mm/yyyy or dd-mm-yyyy)
export function parseDateString(dateStr: string): Date {
  if (!dateStr) return new Date(2026, 8, 7);
  const parts = dateStr.split(/[\/\-]/);
  if (parts.length >= 2) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parts[2] ? parseInt(parts[2], 10) : 2026;
    if (!isNaN(day) && !isNaN(month)) {
      return new Date(year, month - 1, day);
    }
  }
  return new Date(2026, 8, 7);
}

// Calculate the precise 5-day school week range (Monday to Friday) for any week (1 to 35)
// Week 1 = 07/09/2026 ... Week 2 = 14/09/2026 ... Week 35 = 03/05/2027
export function calculateWeekDateRange(
  week: number = 1,
  baseDateStr: string = ACADEMIC_YEAR_START_DATE
): WeekDateRange {
  const safeWeek = Math.max(1, Math.min(35, isNaN(week) ? 1 : Math.round(week)));
  const baseStart = parseDateString(baseDateStr);

  // Calculate Monday date of the requested week
  const monday = new Date(baseStart);
  monday.setDate(baseStart.getDate() + (safeWeek - 1) * 7);

  const dates = Array.from({ length: 5 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  });

  const datesShort = dates.map((d) => d.substring(0, 5));
  const startDate = dates[0];
  const endDate = dates[4];

  return {
    week: safeWeek,
    startDate,
    endDate,
    dates,
    datesShort,
    label: `Tuần ${safeWeek} (${datesShort[0]} - ${datesShort[4]})`,
  };
}

// Helper to calculate weekly dates (Monday to Friday)
// Automatically synchronizes based on the week number (Week 1 = 07/09/2026, Week 2 = 14/09/2026, ..., Week 35 = 03/05/2027)
export function getWeekDates(
  startDateOrWeek?: string | number,
  explicitWeek?: number
): string[] {
  // 1. Direct week number passed as first parameter: getWeekDates(2) -> Week 2 dates
  if (typeof startDateOrWeek === "number") {
    return calculateWeekDateRange(startDateOrWeek).dates;
  }

  // 2. Explicit week number provided as second parameter: getWeekDates(startDateStr, week)
  if (typeof explicitWeek === "number" && explicitWeek >= 1 && explicitWeek <= 35) {
    if (typeof startDateOrWeek === "string" && startDateOrWeek.trim() !== "") {
      const cleanDate = startDateOrWeek.trim();
      // If caller passed the academic year start (07/09/2026) while week > 1, use the calculated week
      if (cleanDate === ACADEMIC_YEAR_START_DATE && explicitWeek > 1) {
        return calculateWeekDateRange(explicitWeek).dates;
      }
      // If the provided date is a specific Monday date (e.g., "14/09/2026" for week 2 or custom Monday),
      // compute 5 consecutive school days (Thứ 2 -> Thứ 6) directly from this base date without double-offsetting!
      const base = parseDateString(cleanDate);
      return Array.from({ length: 5 }, (_, i) => {
        const d = new Date(base);
        d.setDate(base.getDate() + i);
        const dd = String(d.getDate()).padStart(2, "0");
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const yyyy = d.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
      });
    }
    return calculateWeekDateRange(explicitWeek).dates;
  }

  // 3. String provided without explicit week: calculate 5 consecutive school days from this date
  if (typeof startDateOrWeek === "string" && startDateOrWeek.trim() !== "") {
    const base = parseDateString(startDateOrWeek.trim());
    return Array.from({ length: 5 }, (_, i) => {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      const dd = String(d.getDate()).padStart(2, "0");
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const yyyy = d.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    });
  }

  return calculateWeekDateRange(1).dates;
}

// Check if a cell slot matches a specialist teacher or subject
export function isSlotMatchingTeacherOrSubject(
  cellText: string,
  teacherName: string,
  specialistSubject?: string
): boolean {
  if (!cellText || cellText.trim() === "" || cellText === "SHCM" || cellText.toUpperCase() === "HỌP") return false;
  const lowerCell = cellText.toLowerCase();
  const lowerName = teacherName.toLowerCase();

  // Match specialist teacher tags from parentheses & direct keywords
  if (lowerName.includes("sum")) {
    return lowerCell.includes("(sum)") || lowerCell.includes("sum");
  }
  if (lowerName.includes("sơn")) {
    return lowerCell.includes("(sơn)") || lowerCell.includes("sơn");
  }
  if (lowerName.includes("my")) {
    return lowerCell.includes("(my)") || lowerCell.includes("my");
  }
  if (lowerName.includes("hằng") && !lowerName.includes("d. hằng")) {
    return lowerCell.includes("(hằng)") || lowerCell.includes("hằng");
  }
  if (lowerName.includes("toàn")) {
    return lowerCell.includes("(toàn)") || lowerCell.includes("toàn");
  }
  if (lowerName.includes("dánh")) {
    return lowerCell.includes("(dánh)") || lowerCell.includes("dánh");
  }
  if (lowerName.includes("như")) {
    return lowerCell.includes("(như)") || lowerCell.includes("như");
  }
  if (lowerName.includes("tâm")) {
    return lowerCell.includes("(tâm)") || lowerCell.includes("tâm");
  }
  if (lowerName.includes("ngân") && !lowerName.includes("k. ngân")) {
    return lowerCell.includes("(ngân)") || lowerCell.includes("ngân");
  }
  if (lowerName.includes("thơ")) {
    return lowerCell.includes("(thơ)") || lowerCell.includes("thơ");
  }
  if (lowerName.includes("dung")) {
    return lowerCell.includes("(dung)") || lowerCell.includes("dung");
  }
  if (lowerName.includes("tú trinh") || lowerName.includes("v. trinh") === false && lowerName.includes("trinh")) {
    return lowerCell.includes("(trinh)") || lowerCell.includes("trinh");
  }
  if (lowerName.includes("dương") && (lowerName.includes("kim dương") || lowerName.includes("hiệu trưởng") || lowerName.includes("ht"))) {
    return lowerCell.includes("(dương)") || lowerCell.includes("dương");
  }
  if (lowerName.includes("thủy") && (lowerName.includes("hồng thủy") || lowerName.includes("phó hiệu trưởng") || lowerName.includes("pht"))) {
    return lowerCell.includes("(thủy)") || lowerCell.includes("thủy");
  }
  if (lowerName.includes("tuấn") || lowerName.includes("lữ văn tuấn")) {
    return lowerCell.includes("(tuấn)") || lowerCell.includes("tuấn");
  }

  // Legacy specialist teacher tags
  if (lowerName.includes("thịnh")) {
    return lowerCell.includes("(thịnh)") || lowerCell.includes("thịnh");
  }
  if (lowerName.includes("nương")) {
    return lowerCell.includes("(nương)") || lowerCell.includes("nương");
  }
  if (lowerName.includes("phương") && (lowerName.includes("thầy phương") || specialistSubject?.includes("Tin học"))) {
    return lowerCell.includes("(phương)") || lowerCell.includes("phương");
  }
  if (lowerName.includes("thy")) {
    return lowerCell.includes("(thy)") || lowerCell.includes("thy");
  }
  if (lowerName.includes("phước")) {
    return lowerCell.includes("(phước)") || lowerCell.includes("phước");
  }
  if (lowerName.includes("nhàn")) {
    return lowerCell.includes("(nhàn)") || lowerCell.includes("nhàn");
  }
  if (lowerName.includes("quan")) {
    return lowerCell.includes("(quan)") || lowerCell.includes("quan");
  }

  // Check matching by specialist subject keywords
  if (specialistSubject) {
    const sSub = specialistSubject.toLowerCase();
    if (sSub.includes("tiếng anh") || sSub.includes("anh văn")) {
      return lowerCell.includes("ta (my)") || lowerCell.includes("ta (hằng)") || lowerCell.includes("tiếng anh") || lowerCell.includes("ta (nương)") || lowerCell.includes("ta");
    }
    if (sSub.includes("tin học")) {
      return lowerCell.includes("th (toàn)") || lowerCell.includes("th (phương)") || lowerCell.includes("tin học") || lowerCell.includes("t.học") || lowerCell.includes("th");
    }
    if (sSub.includes("âm nhạc")) {
      return lowerCell.includes("an (như)") || lowerCell.includes("bdan (như)") || lowerCell.includes("âm nhạc") || lowerCell.includes("an (tâm)") || lowerCell.includes("an");
    }
    if (sSub.includes("mĩ thuật") || sSub.includes("mỹ thuật")) {
      return lowerCell.includes("mt (dánh)") || lowerCell.includes("mt (ngân)") || lowerCell.includes("mĩ thuật") || lowerCell.includes("mt (thy)") || lowerCell.includes("mt");
    }
    if (sSub.includes("thể chất") || sSub.includes("gdtc")) {
      return lowerCell.includes("gdtc (sum)") || lowerCell.includes("gdtc (sơn)") || lowerCell.includes("gdtc (thịnh)") || lowerCell.includes("thể chất") || lowerCell.includes("gdtc");
    }
    if (sSub.includes("tự nhiên và xã hội") || sSub.includes("tnxh")) {
      return lowerCell.includes("tnxh (tâm)") || lowerCell.includes("tnxh");
    }
    if (sSub.includes("lịch sử") || sSub.includes("địa lí") || sSub.includes("ls&đl")) {
      return lowerCell.includes("ls&đl (ngân)") || lowerCell.includes("ls&đl") || lowerCell.includes("ls-đl");
    }
    if (sSub.includes("đạo đức") || sSub.includes("đđ")) {
      if (lowerName.includes("tuấn")) {
        return lowerCell.includes("(tuấn)") || lowerCell.includes("tuấn");
      }
      if (lowerName.includes("dương")) {
        return lowerCell.includes("(dương)") || lowerCell.includes("dương");
      }
      if (lowerName.includes("thủy")) {
        return lowerCell.includes("(thủy)") || lowerCell.includes("thủy");
      }
      if (lowerName.includes("thơ")) {
        return lowerCell.includes("(thơ)") || lowerCell.includes("thơ");
      }
      if (lowerName.includes("dung")) {
        return lowerCell.includes("(dung)") || lowerCell.includes("dung");
      }
      if (lowerName.includes("trinh")) {
        return lowerCell.includes("(trinh)") || lowerCell.includes("trinh");
      }
      return lowerCell.includes("đđ") || lowerCell.includes("đạo đức");
    }
  }

  // General tag match
  const nameParts = lowerName.split(" ");
  const lastName = nameParts[nameParts.length - 1];
  if (lastName && (lowerCell.includes(`(${lastName})`) || lowerCell.includes(lastName))) {
    return true;
  }

  return false;
}

// Helper to categorize subject shorthand for sequential weekly period counting
export function getSubjectCategory(raw: string, day: DayOfWeek, period: number): string {
  const clean = raw.trim();
  const cUpper = clean.toUpperCase();
  const cLower = clean.toLowerCase();

  // 1. Chào cờ / Sinh hoạt dưới cờ (HĐTN)
  if (
    cUpper.includes("HĐTN (CC)") ||
    cUpper.includes("HDTN (CC)") ||
    clean === "CC" ||
    cLower.includes("chào cờ") ||
    cLower.includes("chao co") ||
    cUpper.includes("SHDC") ||
    ((cUpper.includes("HĐTN") || cUpper.includes("HDTN")) && day === "Thứ Hai" && period === 1)
  ) {
    return "HDTN_SHDC";
  }

  // 2. Sinh hoạt lớp (HĐTN)
  if (
    cUpper.includes("HĐTN (SHL)") ||
    cUpper.includes("HDTN (SHL)") ||
    clean === "SHL" ||
    cLower.includes("sinh hoạt lớp") ||
    cLower.includes("sinh hoat lop") ||
    ((cUpper.includes("HĐTN") || cUpper.includes("HDTN")) && day === "Thứ Sáu" && (period === 4 || period === 5 || period === 2 || period === 3))
  ) {
    return "HDTN_SHL";
  }

  // 3. Hoạt động trải nghiệm chủ đề
  if (cUpper.includes("HĐTN") || cUpper.includes("HDTN") || cLower.includes("hoạt động trải nghiệm") || cLower.includes("trai nghiem")) {
    return "HDTN_GDCD";
  }

  // 4. Kĩ năng sống
  if (cUpper.includes("KNS") || cLower.includes("kĩ năng sống") || cLower.includes("kỹ năng sống")) {
    return "KNS";
  }

  // 5. Tăng cường / Luyện Tiếng Việt (TCTV)
  if (
    cUpper.includes("TCTV") ||
    cUpper.includes("T. CƯỜNG TV") ||
    cUpper.includes("T.CƯỜNG TV") ||
    cLower.includes("luyện tiếng việt") ||
    cLower.includes("luyện tv") ||
    cLower.includes("tăng cường tiếng việt") ||
    cLower.includes("ôn tiếng việt")
  ) {
    return "TCTV";
  }

  // 6. Tăng cường / Luyện Toán (TCT)
  if (
    cUpper.includes("TCT") ||
    cUpper.includes("T. CƯỜNG T") ||
    cUpper.includes("T.CƯỜNG T") ||
    cLower.includes("luyện toán") ||
    cLower.includes("luyện t") ||
    cLower.includes("tăng cường toán") ||
    cLower.includes("ôn toán")
  ) {
    return "TCT";
  }

  // 7. Tiếng Anh
  if (cUpper.includes("TA") || cLower.includes("tiếng anh") || cLower.includes("anh văn") || cLower.includes("english")) {
    return "TA";
  }

  // 8. Tin học
  if (cUpper.includes("TH") || cLower.includes("tin học") || cLower.includes("t.học") || cLower.includes("tin hoc")) {
    return "TH";
  }

  // 9. Công nghệ
  if (clean === "CN" || clean.startsWith("CN ") || cLower.includes("công nghệ") || cLower.includes("cong nghe")) {
    return "CN";
  }

  // 10. Giáo dục Thể chất / Thể dục
  if (cUpper.includes("GDTC") || cLower.includes("thể chất") || cLower.includes("thể dục") || clean === "TD" || cUpper.includes("THỂ CHẤT")) {
    return "GDTC";
  }

  // 11. Âm nhạc
  if (cUpper.includes("AN") || cLower.includes("âm nhạc") || cUpper.includes("BDAN") || cLower.includes("am nhac")) {
    return "AN";
  }

  // 12. Mĩ thuật
  if (cUpper.includes("MT") || cLower.includes("mĩ thuật") || cLower.includes("mỹ thuật") || cUpper.includes("BDMT")) {
    return "MT";
  }

  // 13. Tự nhiên và Xã hội
  if (cUpper.includes("TNXH") || cUpper.includes("TN&XH") || cLower.includes("tự nhiên và xã hội") || cLower.includes("tự nhiên & xã hội")) {
    return "TNXH";
  }

  // 14. Lịch sử và Địa lí
  if (cUpper.includes("LS-ĐL") || cUpper.includes("LS&ĐL") || clean === "LS" || clean === "ĐL" || cLower.includes("lịch sử") || cLower.includes("địa lí") || cLower.includes("địa lý")) {
    return "LSDL";
  }

  // 15. Khoa học
  if (clean === "KH" || cLower.includes("khoa học") || cLower.includes("khoa hoc")) {
    return "KH";
  }

  // 16. Đạo đức
  if (cUpper.includes("ĐĐ") || cLower.includes("đạo đức") || cLower.includes("dao duc")) {
    return "DD";
  }

  // 17. Giáo dục địa phương
  if (cUpper.includes("GDĐP") || cLower.includes("địa phương") || cLower.includes("gdđp")) {
    return "GDDP";
  }

  // 18. Tiếng Việt chính khóa
  if (clean === "TV" || clean.startsWith("TV ") || cLower.includes("tiếng việt") || cLower === "tv") {
    return "TV";
  }

  // 19. Toán chính khóa
  if (clean === "T" || clean.startsWith("T ") || cLower.includes("toán") || cLower === "t") {
    return "TOAN";
  }

  return clean;
}

// Helper to generate full weekly schedule items for a specific class (GVCN)
export function generateScheduleForClass(
  master: MasterTimetable,
  targetClass: string,
  week: number = 1,
  startDateStr?: string,
  teacherName: string = "Lữ Văn Tuấn"
): ScheduleItem[] {
  const items: ScheduleItem[] = [];
  const dates = getWeekDates(startDateStr, week);
  const subjectCounters: Record<string, number> = {};

  DAYS_OF_WEEK.forEach((day, dIdx) => {
    // Sáng (Tiết 1 -> 5)
    const aliasClass = targetClass === "1A1" ? "1A" : (targetClass === "1A" ? "1A1" : targetClass);
    for (let p = 1; p <= 5; p++) {
      const key = `${day}_Sáng_${p}`;
      const slotRow = master.slots[key] || {};
      const subjectRaw = (
        slotRow[targetClass] ||
        slotRow[aliasClass] ||
        slotRow[targetClass.toUpperCase()] ||
        slotRow[targetClass.toLowerCase()] ||
        ""
      ).trim();
      if (subjectRaw && subjectRaw !== "") {
        const cat = getSubjectCategory(subjectRaw, day, p);
        subjectCounters[cat] = (subjectCounters[cat] || 0) + 1;
        const pInW = subjectCounters[cat];

        const item = mapRawSubjectToScheduleItem(
          subjectRaw,
          day,
          dates[dIdx],
          "Sáng",
          p,
          targetClass,
          week,
          teacherName,
          undefined,
          pInW
        );
        if (item) items.push(item);
      }
    }

    // Chiều (Tiết 1 -> 4)
    for (let p = 1; p <= 4; p++) {
      const key = `${day}_Chiều_${p}`;
      const slotRow = master.slots[key] || {};
      const subjectRaw = (
        slotRow[targetClass] ||
        slotRow[aliasClass] ||
        slotRow[targetClass.toUpperCase()] ||
        slotRow[targetClass.toLowerCase()] ||
        ""
      ).trim();
      if (subjectRaw && subjectRaw !== "" && subjectRaw !== "SHCM") {
        const cat = getSubjectCategory(subjectRaw, day, p);
        subjectCounters[cat] = (subjectCounters[cat] || 0) + 1;
        const pInW = subjectCounters[cat];

        const item = mapRawSubjectToScheduleItem(
          subjectRaw,
          day,
          dates[dIdx],
          "Chiều",
          p,
          targetClass,
          week,
          teacherName,
          undefined,
          pInW
        );
        if (item) items.push(item);
      }
    }
  });

  return items;
}

// Helper to generate full weekly schedule items for a Specialist Teacher (GV Chuyên Bộ Môn)
export function generateSpecialistSchedule(
  master: MasterTimetable,
  teacherName: string,
  specialistSubject: string,
  week: number = 1,
  startDateStr?: string,
  assignedClasses: string[] = DEFAULT_CLASSES
): ScheduleItem[] {
  const items: ScheduleItem[] = [];
  const dates = getWeekDates(startDateStr, week);
  const classSubjectCounters: Record<string, Record<string, number>> = {};

  DAYS_OF_WEEK.forEach((day, dIdx) => {
    // Sáng (Tiết 1 -> 5)
    for (let p = 1; p <= 5; p++) {
      const key = `${day}_Sáng_${p}`;
      const slotRow = master.slots[key] || {};

      assignedClasses.forEach((cls) => {
        const cell = (slotRow[cls] || "").trim();
        if (cell && isSlotMatchingTeacherOrSubject(cell, teacherName, specialistSubject)) {
          if (!classSubjectCounters[cls]) classSubjectCounters[cls] = {};
          const cat = getSubjectCategory(cell, day, p);
          classSubjectCounters[cls][cat] = (classSubjectCounters[cls][cat] || 0) + 1;
          const pInW = classSubjectCounters[cls][cat];

          const item = mapRawSubjectToScheduleItem(
            cell,
            day,
            dates[dIdx],
            "Sáng",
            p,
            cls,
            week,
            teacherName,
            specialistSubject,
            pInW
          );
          if (item) items.push(item);
        }
      });
    }

    // Chiều (Tiết 1 -> 3)
    for (let p = 1; p <= 3; p++) {
      const key = `${day}_Chiều_${p}`;
      const slotRow = master.slots[key] || {};

      assignedClasses.forEach((cls) => {
        const cell = (slotRow[cls] || "").trim();
        if (cell && cell !== "SHCM" && isSlotMatchingTeacherOrSubject(cell, teacherName, specialistSubject)) {
          if (!classSubjectCounters[cls]) classSubjectCounters[cls] = {};
          const cat = getSubjectCategory(cell, day, p);
          classSubjectCounters[cls][cat] = (classSubjectCounters[cls][cat] || 0) + 1;
          const pInW = classSubjectCounters[cls][cat];

          const item = mapRawSubjectToScheduleItem(
            cell,
            day,
            dates[dIdx],
            "Chiều",
            p,
            cls,
            week,
            teacherName,
            specialistSubject,
            pInW
          );
          if (item) items.push(item);
        }
      });
    }
  });

  return items;
}

// Unified weekly schedule generator based on SchoolInfo
export function generateWeeklyScheduleFromTimetable(
  master: MasterTimetable,
  targetClass: string,
  teacherName: string,
  week: number,
  startDateStr: string,
  teacherType: "homeroom" | "specialist" = "homeroom",
  specialistSubject: string = "Tiếng Anh",
  assignedClasses: string[] = DEFAULT_CLASSES
): ScheduleItem[] {
  if (teacherType === "specialist") {
    return generateSpecialistSchedule(master, teacherName, specialistSubject, week, startDateStr, assignedClasses);
  }
  return generateScheduleForClass(master, targetClass, week, startDateStr, teacherName);
}

// Helper to detect specialist teacher short display name
export function getSpecialistTeacherShortName(item: {
  subject?: string;
  subSubject?: string;
  note?: string;
  lessonTitle?: string;
  raw?: string;
}): string | null {
  const sub = (item.subject || "").toUpperCase();
  const raw = (item.raw || "").toUpperCase();
  const note = (item.note || "").toUpperCase();

  if (raw.includes("(SUM)") || note.includes("SUM")) return "Thầy Sum";
  if (raw.includes("(SƠN)") || note.includes("SƠN")) return "Thầy Sơn";
  if (raw.includes("(MY)") || note.includes("MY")) return "Cô My";
  if (raw.includes("(HẰNG)") || note.includes("HẰNG")) return "Cô Hằng";
  if (raw.includes("(TOÀN)") || note.includes("TOÀN")) return "Thầy Toàn";
  if (raw.includes("(DÁNH)") || note.includes("DÁNH")) return "Thầy Dánh";
  if (raw.includes("(NHƯ)") || note.includes("NHƯ")) return "Cô Như";
  if (raw.includes("(TÂM)") || note.includes("TÂM")) return "Cô Tâm";
  if (raw.includes("(NGÂN)") || note.includes("NGÂN")) return "Cô Ngân";
  if (raw.includes("(THƠ)") || note.includes("THƠ")) return "Cô Thơ";
  if (raw.includes("(DUNG)") || note.includes("DUNG")) return "Cô Dung";
  if (raw.includes("(TRINH)") || note.includes("TRINH")) return "Cô Tú Trinh";
  if (raw.includes("(DƯƠNG)") || note.includes("DƯƠNG")) return "Cô Trương Thị Kim Dương";
  if (raw.includes("(THỦY)") || note.includes("THỦY")) return "Cô Lê Thị Hồng Thủy";
  if (raw.includes("(TUẤN)") || note.includes("TUẤN")) return "Thầy Lữ Văn Tuấn";

  // Legacy fallback
  if (raw.includes("(THỊNH)") || note.includes("THỊNH") || sub.includes("GD THỂ CHẤT") || sub.includes("GDTC") || sub.includes("THỂ DỤC")) {
    return "Thầy Thịnh";
  }
  if (raw.includes("(NƯƠNG)") || note.includes("NƯƠNG") || sub.includes("TIẾNG ANH") || sub === "TA") {
    return "Cô Nương";
  }
  if (raw.includes("(PHƯƠNG)") || note.includes("PHƯƠNG") || sub.includes("TIN HỌC") || sub === "TH") {
    return "Thầy Phương";
  }
  if (raw.includes("(THY)") || note.includes("THY") || sub.includes("MĨ THUẬT") || sub === "MT") {
    return "Thầy Thy";
  }
  if (raw.includes("(PHƯỚC)") || note.includes("PHƯỚC")) {
    return "Thầy Phước";
  }
  if (raw.includes("(NHÀN)") || note.includes("NHÀN")) {
    return "Thầy Nhàn";
  }
  if (raw.includes("(QUAN)") || note.includes("QUAN")) {
    return "Thầy Quan";
  }

  return null;
}

// Helper to map shorthand cell string to detailed Lesson Plan Item
export function mapRawSubjectToScheduleItem(
  raw: string,
  day: DayOfWeek,
  dateStr: string,
  session: SessionType,
  period: number,
  className: string,
  week: number,
  teacherName: string,
  specialistSubject?: string,
  subjectPeriodInWeek?: number
): ScheduleItem {
  const clean = raw.trim();
  const gradeNum = ((parseInt(className.charAt(0)) as Grade) || 5) as Grade;

  let subject = `TIẾNG VIỆT ${gradeNum}`;
  let subSubject = "";
  let lessonTitle = clean;
  let curriculumPeriod: string | number = week * 4 + period;
  let integrationNotes = "";
  let note = "";

  // 1. Detect Teacher Annotation Note from parenthesis
  if (clean.includes("(Sum)")) {
    note = "GV Chuyên GDTC: Thầy Sum (TPCM)";
  } else if (clean.includes("(Sơn)")) {
    note = "GV Chuyên GDTC: Thầy Sơn";
  } else if (clean.includes("(My)")) {
    note = "GV Chuyên TA: Cô My";
  } else if (clean.includes("(Hằng)")) {
    note = "GV Chuyên TA: Cô Hằng";
  } else if (clean.includes("(Toàn)")) {
    note = "GV Chuyên TH: Thầy Toàn (TPCM)";
  } else if (clean.includes("(Dánh)")) {
    note = "GV Chuyên MT: Thầy Dánh";
  } else if (clean.includes("(Như)")) {
    note = "GV Chuyên AN: Cô Như";
  } else if (clean.includes("(Tâm)")) {
    note = "GV Bộ môn TNXH: Cô Tâm (TVHS)";
  } else if (clean.includes("(Ngân)")) {
    note = "GV Bộ môn: Cô Ngân (ĐVP)";
  } else if (clean.includes("(Thơ)")) {
    note = "GV Bộ môn: Cô Thơ";
  } else if (clean.includes("(Dung)")) {
    note = "GV Bộ môn: Cô Dung";
  } else if (clean.includes("(Trinh)")) {
    note = "GV Bộ môn: Cô Tú Trinh";
  } else if (clean.includes("(Dương)")) {
    note = "HT: Trương Thị Kim Dương";
  } else if (clean.includes("(Thủy)")) {
    note = "PHT: Lê Thị Hồng Thủy";
  } else if (clean.includes("(Tuấn)")) {
    note = "GV Đạo đức: Thầy Lữ Văn Tuấn";
  } else if (clean.includes("(Thịnh)")) {
    note = "GV Chuyên GDTC: Thầy Thịnh";
  } else if (clean.includes("(Nương)")) {
    note = "GV Chuyên TA: Cô Nương";
  } else if (clean.includes("(Phương)")) {
    note = "GV Chuyên TH: Thầy Phương";
  } else if (clean.includes("(Thy)")) {
    note = "GV Chuyên MT: Thầy Thy";
  } else if (clean.includes("(Phước)")) {
    note = "GV Bộ môn: Thầy Phước";
  } else if (clean.includes("(Nhàn)")) {
    note = "GV Bộ môn: Thầy Nhàn";
  } else if (clean.includes("(Quan)")) {
    note = "PHT: Phan Ngọc Quan";
  }

  // 2. TIẾNG ANH (TA)
  if ((clean.includes("TA") || clean.includes("Anh văn") || clean.includes("Tiếng Anh")) && !clean.includes("HĐTN") && !clean.includes("HDTN")) {
    subject = `TIẾNG ANH ${gradeNum}`;
    if (!note) {
      note = clean.includes("Hằng") ? "GV Chuyên TA: Cô Hằng" : "GV Chuyên TA: Cô My";
    }
    const pInW = subjectPeriodInWeek || ((period % 4) + 1);
    const englishDetail = getDetailedEnglishLesson(gradeNum, week, undefined, pInW);
    lessonTitle = englishDetail.lessonTitle;
    curriculumPeriod = (week - 1) * 4 + ((pInW - 1) % 4) + 1;
    integrationNotes = englishDetail.integrationNotes;
  }

  // 3. TIN HỌC (TH)
  else if ((clean.includes("TH") || clean.includes("T.học") || clean.includes("Tin học")) && !clean.includes("CN") && !clean.includes("HĐTN") && !clean.includes("HDTN")) {
    subject = `TIN HỌC ${gradeNum}`;
    if (!note) note = "GV Chuyên TH: Thầy Toàn (TPCM)";
    const pInW = subjectPeriodInWeek || ((period % 2) + 1);
    const info = getGradeCurriculumLesson(gradeNum, "Tin học", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp NLS (CV 3456/BGDĐT-GDTH)";
  }

  // 4. CÔNG NGHỆ (CN)
  else if (clean === "CN" || clean.startsWith("CN ") || clean.includes("Công nghệ") || clean.includes("CN (Thơ)") || clean.includes("CN (Trinh)")) {
    subject = `CÔNG NGHỆ ${gradeNum}`;
    if (!note && clean.includes("Thơ")) note = "GV Bộ môn: Cô Thơ";
    if (!note && clean.includes("Trinh")) note = "GV Bộ môn: Cô Tú Trinh";
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "công nghệ", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp STEM sáng tạo & Kĩ năng ứng dụng";
  }

  // 5. ÂM NHẠC (AN / BDAN)
  else if ((clean.includes("AN") || clean.includes("Âm nhạc") || clean.includes("BDAN")) && !clean.includes("HĐTN") && !clean.includes("HDTN") && !clean.includes("Quan")) {
    subject = `ÂM NHẠC ${gradeNum}`;
    const isEnhance = clean.includes("BDAN") || clean.includes("Bồi dưỡng") || session === "Chiều";
    subSubject = isEnhance ? "Bồi dưỡng Âm nhạc" : "Âm nhạc";
    if (!note) note = "GV Chuyên AN: Cô Như";
    const musicDetail = getDetailedMusicLesson(gradeNum, week, isEnhance, session as any);
    lessonTitle = musicDetail.lessonTitle;
    curriculumPeriod = isEnhance ? `BD${week}` : week;
    integrationNotes = musicDetail.integrationNotes;
  }

  // 6. MĨ THUẬT (MT / BDMT)
  else if ((clean.includes("MT") || clean.includes("Mĩ thuật") || clean.includes("BDMT")) && !clean.includes("HĐTN") && !clean.includes("HDTN")) {
    subject = `MĨ THUẬT ${gradeNum}`;
    const isEnhance = clean.includes("BDMT") || clean.includes("Bồi dưỡng");
    subSubject = isEnhance ? "Bồi dưỡng Mĩ thuật" : "Mĩ thuật";
    if (!note) note = clean.includes("Ngân") ? "GV Bộ môn: Cô Ngân" : "GV Chuyên MT: Thầy Dánh";
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "Mĩ thuật", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp STEM sáng tạo & QCN";
  }

  // 7. GIÁO DỤC THỂ CHẤT / THỂ DỤC (GDTC, TD)
  else if (
    (clean.includes("GDTC") || clean.toLowerCase().includes("thể chất") || clean.toLowerCase().includes("thể dục") || clean === "TD") &&
    !clean.includes("HĐTN") && !clean.includes("HDTN")
  ) {
    subject = `GIÁO DỤC THỂ CHẤT ${gradeNum}`;
    subSubject = gradeNum === 5 ? "Thể dục" : "Giáo dục thể chất";
    if (!note) note = clean.includes("Sơn") ? "GV Chuyên GDTC: Thầy Sơn" : "GV Chuyên GDTC: Thầy Sum (TPCM)";
    const pInW = subjectPeriodInWeek || ((period % 2) + 1);
    const info = getGradeCurriculumLesson(gradeNum, "Giáo dục thể chất", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp rèn luyện thể lực & tác phong nhanh nhẹn";
  }

  // 8. HOẠT ĐỘNG TRẢI NGHIỆM (HĐTN)
  // 8a. Chào cờ / Sinh hoạt dưới cờ
  else if (
    clean.includes("HĐTN (CC)") ||
    clean.includes("HDTN (CC)") ||
    clean === "CC" ||
    clean.toLowerCase().includes("chào cờ") ||
    clean.toLowerCase().includes("sinh hoạt dưới cờ") ||
    clean.toUpperCase().includes("SHDC") ||
    ((clean.includes("HĐTN") || clean.includes("HDTN")) && day === "Thứ Hai" && period === 1)
  ) {
    subject = "HĐTN";
    subSubject = "Sinh hoạt dưới cờ";
    if (!note) note = "Chào cờ đầu tuần";
    curriculumPeriod = (week - 1) * 3 + 1;
    if (week === 3) {
      lessonTitle = "Sinh hoạt dưới cờ: HOẠT ĐỘNG VUI TRUNG THU";
    } else {
      const info = getGradeCurriculumLesson(gradeNum, "hoạt động trải nghiệm", week, 1);
      lessonTitle = info.lessonTitle;
    }
    integrationNotes = "Tích hợp QCN, KNS, Giáo dục truyền thống";
  } 
  // 8b. Sinh hoạt lớp (Tích hợp An toàn giao thông theo mẫu mới của Bộ GD&ĐT)
  else if (
    clean.includes("HĐTN (SHL)") ||
    clean.includes("HDTN (SHL)") ||
    clean === "SHL" ||
    clean.toLowerCase().includes("sinh hoạt lớp") ||
    ((clean.includes("HĐTN") || clean.includes("HDTN")) && day === "Thứ Sáu" && (period === 4 || period === 5 || period === 2 || period === 3))
  ) {
    subject = "HĐTN";
    subSubject = "Sinh hoạt lớp";
    note = "Sinh hoạt cuối tuần";
    curriculumPeriod = (week - 1) * 3 + 3;
    lessonTitle = getShlAtgtLessonTitleForLbg(gradeNum, week);
    integrationNotes = "Tích hợp Giáo dục kỹ năng sống, quản lý cảm xúc bản thân và Giáo dục Văn hóa giao thông an toàn.";
  } 
  // 8c. Hoạt động giáo dục theo chủ đề
  else if (clean.includes("HĐTN") || clean.includes("HDTN") || clean.toLowerCase().includes("trải nghiệm")) {
    subject = "HĐTN";
    subSubject = "Hoạt động giáo dục theo chủ đề";
    curriculumPeriod = (week - 1) * 3 + 2;
    if (!note && clean.includes("Thy")) note = "GV Chuyên MT: Thầy Thy";
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Thầy Nhàn";
    const info = getGradeCurriculumLesson(gradeNum, "hoạt động trải nghiệm", week, 2);
    lessonTitle = info.lessonTitle;
    integrationNotes = info.integrationNotes || "Tích hợp KNS & QCN";
  }

  // 9. KĨ NĂNG SỐNG (KNS)
  else if (clean.toUpperCase().includes("KNS") || clean.toLowerCase().includes("kĩ năng sống") || clean.toLowerCase().includes("kỹ năng sống")) {
    subject = `KĨ NĂNG SỐNG ${gradeNum}`;
    subSubject = "Kĩ năng sống";
    const pInW = subjectPeriodInWeek || 1;
    lessonTitle = `Giáo dục Kĩ năng sống tuần ${week}: Kĩ năng tự phục vụ và giao tiếp văn minh`;
    curriculumPeriod = `KNS${pInW}`;
    integrationNotes = "Tích hợp rèn thói quen tự lập, tôn trọng và hợp tác";
  }

  // 10. LỊCH SỬ VÀ ĐỊA LÍ (LS-ĐL, LS, ĐL)
  else if (
    clean.includes("LS-ĐL") ||
    clean.includes("LS&ĐL") ||
    clean === "LS" ||
    clean === "ĐL" ||
    clean.toLowerCase().includes("lịch sử") ||
    clean.toLowerCase().includes("địa lí") ||
    clean.toLowerCase().includes("địa lý")
  ) {
    subject = `LỊCH SỬ VÀ ĐỊA LÍ ${gradeNum}`;
    subSubject = clean.includes("ĐL") && !clean.includes("LS") ? "Địa lí" : (clean.includes("LS") && !clean.includes("ĐL") ? "Lịch sử" : "Lịch sử và Địa lí");
    const pInW = subjectPeriodInWeek || ((day === "Thứ Hai" || day === "Thứ Ba") ? 1 : 2);
    const info = getGradeCurriculumLesson(gradeNum, "lịch sử và địa lí", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Giáo dục lòng yêu nước, bảo vệ chủ quyền biên giới & biển đảo";
  }

  // 11. TỰ NHIÊN VÀ XÃ HỘI (TNXH)
  else if (
    clean.toUpperCase().includes("TNXH") ||
    clean.toUpperCase().includes("TN&XH") ||
    clean.toLowerCase().includes("tự nhiên và xã hội") ||
    clean.toLowerCase().includes("tự nhiên & xã hội") ||
    clean.toLowerCase().includes("tu nhien va xa hoi")
  ) {
    subject = `TỰ NHIÊN VÀ XÃ HỘI ${gradeNum}`;
    if (!note) note = clean.includes("Tâm") ? "GV Bộ môn TNXH: Cô Tâm (TVHS)" : (clean.includes("Phước") ? "GV Bộ môn: Thầy Phước" : "");
    const pInW = subjectPeriodInWeek || ((day === "Thứ Hai" || day === "Thứ Ba") ? 1 : 2);
    const info = getGradeCurriculumLesson(gradeNum, "tự nhiên và xã hội", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp giáo dục môi trường & chăm sóc sức khỏe";
  }

  // 12. KHOA HỌC (KH)
  else if (clean === "KH" || clean.toLowerCase().includes("khoa học") || clean.toLowerCase().includes("khoa hoc")) {
    subject = `KHOA HỌC ${gradeNum}`;
    const pInW = subjectPeriodInWeek || ((day === "Thứ Hai" || day === "Thứ Ba") ? 1 : 2);
    const info = getGradeCurriculumLesson(gradeNum, "khoa học", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp tư duy khoa học thực nghiệm & STEM";
  }

  // 13. ĐẠO ĐỨC (ĐĐ)
  else if (clean.includes("ĐĐ") || clean.toLowerCase().includes("đạo đức") || clean.toLowerCase().includes("dao duc")) {
    subject = `ĐẠO ĐỨC ${gradeNum}`;
    if (!note && clean.includes("Dương")) note = "HT: Trương Thị Kim Dương";
    else if (!note && clean.includes("Thủy")) note = "PHT: Lê Thị Hồng Thủy";
    else if (!note && clean.includes("Tuấn")) note = "GV Đạo đức: Thầy Lữ Văn Tuấn";
    else if (!note && clean.includes("Thơ")) note = "GV Bộ môn: Cô Thơ";
    else if (!note && clean.includes("Dung")) note = "GV Bộ môn: Cô Dung";
    else if (!note && clean.includes("Trinh")) note = "GV Bộ môn: Cô Tú Trinh";
    else if (!note && clean.includes("Quan")) note = "PHT: Phan Ngọc Quan";
    else if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "đạo đức", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Giáo dục đạo đức & Quyền con người";
  }

  // 14. GIÁO DỤC ĐỊA PHƯƠNG (GDĐP)
  else if (clean.toUpperCase().includes("GDĐP") || clean.toLowerCase().includes("địa phương")) {
    subject = `GIÁO DỤC ĐỊA PHƯƠNG ${gradeNum}`;
    subSubject = "Tài liệu giáo dục địa phương";
    lessonTitle = `Tài liệu Giáo dục địa phương tuần ${week}`;
    curriculumPeriod = `GDĐP${week}`;
    integrationNotes = "Giáo dục truyền thống văn hóa quê hương";
  }

  // 15. TĂNG CƯỜNG TIẾNG VIỆT (TCTV, Luyện TV)
  else if (
    clean === "TCTV" ||
    clean.includes("TCTV") ||
    clean.includes("TC TV") ||
    clean.includes("TC Tiếng Việt") ||
    clean.includes("T. cường TV") ||
    clean.includes("T.cường TV") ||
    clean.toLowerCase().includes("luyện tiếng việt") ||
    clean.toLowerCase().includes("luyện tv") ||
    clean.toLowerCase().includes("tăng cường tiếng việt")
  ) {
    subject = `TIẾNG VIỆT ${gradeNum}`;
    subSubject = "Tăng cường Tiếng Việt";
    if (!note && clean.includes("Dung")) note = "GV Bộ môn: Cô Dung";
    else if (!note && clean.includes("Thơ")) note = "GV Bộ môn: Cô Thơ";
    else if (!note && clean.includes("Trinh")) note = "GV Bộ môn: Cô Tú Trinh";
    else if (!note && clean.includes("Tâm")) note = "GV Bộ môn TNXH: Cô Tâm (TVHS)";
    else if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const pInW = subjectPeriodInWeek || 1;
    lessonTitle = `Luyện tập Tiếng Việt: Củng cố rèn chữ, từ và câu tuần ${week}`;
    curriculumPeriod = `TCTV${pInW}`;
    integrationNotes = "Rèn luyện kĩ năng đọc, viết và diễn đạt lưu loát";
  }

  // 16. TĂNG CƯỜNG TOÁN (TCT, Luyện Toán)
  else if (
    clean === "TCT" ||
    clean.includes("TCT") ||
    clean.includes("TC T") ||
    clean.includes("TC Toán") ||
    clean.includes("T. cường T") ||
    clean.includes("T.cường T") ||
    clean.toLowerCase().includes("luyện toán") ||
    clean.toLowerCase().includes("luyện t") ||
    clean.toLowerCase().includes("tăng cường toán")
  ) {
    subject = `TOÁN ${gradeNum}`;
    subSubject = "Tăng cường Toán";
    if (!note && clean.includes("Dung")) note = "GV Bộ môn: Cô Dung";
    else if (!note && clean.includes("Trinh")) note = "GV Bộ môn: Cô Tú Trinh";
    else if (!note && clean.includes("Phước")) note = "GV Bộ môn: Thầy Phước";
    else if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const pInW = subjectPeriodInWeek || 1;
    lessonTitle = `Luyện tập thực hành Toán tuần ${week}`;
    curriculumPeriod = `TCT${pInW}`;
    integrationNotes = "Củng cố kĩ năng tính toán và giải toán có lời văn";
  }

  // 17. TIẾNG VIỆT CHÍNH KHÓA (TV)
  else if (
    clean === "TV" ||
    clean.startsWith("TV ") ||
    clean === "Tiếng Việt" ||
    clean.toLowerCase().includes("tiếng việt") ||
    clean.toLowerCase().includes("tieng viet")
  ) {
    subject = `TIẾNG VIỆT ${gradeNum}`;
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "tiếng việt", week, Math.min(pInW, 12));
    lessonTitle = info.lessonTitle;
    subSubject = info.subSubject || "";
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "";
  }

  // 18. TOÁN CHÍNH KHÓA (T)
  else if (
    clean === "T" ||
    clean.startsWith("T ") ||
    clean === "Toán" ||
    clean.toLowerCase().includes("toán") ||
    clean.toLowerCase().includes("toan")
  ) {
    subject = `TOÁN ${gradeNum}`;
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "toán", week, Math.min(pInW, 5));
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "";
  }

  // 19. HỌP TOÀN TRƯỜNG / HỘI ĐỒNG SƯ PHẠM
  else if (clean.toUpperCase() === "HỌP" || clean.toUpperCase().includes("HỌP")) {
    subject = "HỌP";
    subSubject = "Hội đồng sư phạm";
    lessonTitle = "Họp hội đồng sư phạm / Sinh hoạt chuyên môn";
    curriculumPeriod = "-";
    if (!note) note = "Họp toàn trường";
    integrationNotes = "";
  }

  // 20. TỰ CHỌN HOẶC MÔN HỌC KHÁC
  else {
    subject = clean.toUpperCase();
    subSubject = "";
    lessonTitle = clean;
    curriculumPeriod = period;
    integrationNotes = "Thực hiện theo kế hoạch nhà trường";
  }

  const specName = getSpecialistTeacherShortName({ subject, subSubject, note, lessonTitle, raw: clean });
  const isSpecialistPeriod = Boolean(specName) && subject !== "HỌP";

  return {
    id: `item-${day}-${session}-${period}-${className}-${Math.random().toString(36).substring(2, 7)}`,
    day,
    dateStr,
    session,
    period,
    subject,
    subSubject,
    curriculumPeriod,
    lessonTitle: cleanLessonTitle(lessonTitle),
    integrationNotes,
    note,
    teacherName,
    className,
    isSpecialistPeriod,
    specialistTeacherName: specName || undefined,
  };
}
