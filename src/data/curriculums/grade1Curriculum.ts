import { LessonInfo } from "../gradeCurriculums";
import {
  OFFICIAL_G1_TIENG_VIET,
  OFFICIAL_G1_TOAN,
  OFFICIAL_G1_TNXH,
  OFFICIAL_G1_DAO_DUC,
  OFFICIAL_G1_HDTN,
  Grade1SubjectItem,
} from "./grade1KhdhOfficial";

// ============================================================================
// KẾ HOẠCH DẠY HỌC KHỐI 1 - CHÍNH THỨC NĂM HỌC 2026-2027 (KẾT NỐI TRI THỨC)
// Đồng bộ 100% theo KHDH Lớp 1A1 Trường Tiểu học Tân Thạnh (Phân hiệu Trường Chính)
// ============================================================================

export const GRADE_1_TIENG_VIET = OFFICIAL_G1_TIENG_VIET;
export const GRADE_1_TOAN = OFFICIAL_G1_TOAN;
export const GRADE_1_TNXH = OFFICIAL_G1_TNXH;
export const GRADE_1_DAO_DUC = OFFICIAL_G1_DAO_DUC;
export const GRADE_1_HDTN = OFFICIAL_G1_HDTN;

export const GRADE_1_CURRICULUM_DATA: Record<string, (week: number, p: number) => LessonInfo> = {
  "tiếng việt": (week: number, p: number) => {
    const list = GRADE_1_TIENG_VIET[week];
    const safeIdx = Math.max(0, Math.min(list ? list.length - 1 : 0, p - 1));
    if (list && list[safeIdx]) {
      const item = list[safeIdx];
      return {
        lessonTitle: item.title,
        subSubject: item.sub || "Tiếng Việt 1",
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Tiếng Việt 1 - Kết nối tri thức với cuộc sống."
      };
    }
    return {
      lessonTitle: `Tiếng Việt 1 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 12 + p,
      integrationNotes: "Tiếng Việt 1 GDPT 2018."
    };
  },

  "toán": (week: number, p: number) => {
    const list = GRADE_1_TOAN[week];
    const safeIdx = Math.max(0, Math.min(list ? list.length - 1 : 0, p - 1));
    if (list && list[safeIdx]) {
      const item = list[safeIdx];
      return {
        lessonTitle: item.title,
        subSubject: item.sub || "Toán 1",
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Toán 1 - Kết nối tri thức với cuộc sống."
      };
    }
    return {
      lessonTitle: `Toán 1 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Toán 1 GDPT 2018."
    };
  },

  "tự nhiên và xã hội": (week: number, p: number) => {
    const list = GRADE_1_TNXH[week];
    const safeIdx = Math.max(0, Math.min(list ? list.length - 1 : 0, p - 1));
    if (list && list[safeIdx]) {
      const item = list[safeIdx];
      return {
        lessonTitle: item.title,
        subSubject: item.sub || "Tự nhiên và Xã hội 1",
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "TNXH 1 - Kết nối tri thức với cuộc sống."
      };
    }
    return {
      lessonTitle: `TNXH 1 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Tự nhiên và Xã hội 1 GDPT 2018."
    };
  },

  "đạo đức": (week: number) => {
    const item = GRADE_1_DAO_DUC[week];
    if (item) {
      return {
        lessonTitle: item.title,
        subSubject: item.sub || "Đạo đức 1",
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Đạo đức 1 - Kết nối tri thức với cuộc sống."
      };
    }
    return {
      lessonTitle: `Đạo đức 1 - Tuần ${week}`,
      curriculumPeriod: week,
      integrationNotes: "Đạo đức 1 GDPT 2018."
    };
  },

  "hoạt động trải nghiệm": (week: number, p: number) => {
    const list = GRADE_1_HDTN[week];
    const safeIdx = Math.max(0, Math.min(list ? list.length - 1 : 0, p - 1));
    if (list && list[safeIdx]) {
      const item = list[safeIdx];
      return {
        lessonTitle: item.title,
        subSubject: item.sub || (p === 1 ? "Sinh hoạt dưới cờ" : p === 2 ? "Hoạt động theo chủ đề" : "Sinh hoạt lớp"),
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Hoạt động trải nghiệm 1 - Kết nối tri thức với cuộc sống."
      };
    }
    return {
      lessonTitle: p === 1 ? `SHDC Tuần ${week}: Nề nếp chào cờ` : p === 2 ? `HĐGDCĐ Tuần ${week}: Hoạt động theo chủ đề` : `Sinh hoạt lớp Tuần ${week}: Đánh giá nề nếp tuần`,
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Hoạt động trải nghiệm 1 GDPT 2018."
    };
  },

  "giáo dục thể chất": (week: number, p: number) => {
    return {
      lessonTitle: `Giáo dục thể chất 1: Đội hình đội ngũ & Tư thế cơ bản (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Rèn luyện tư thế vận động cơ bản."
    };
  }
};
