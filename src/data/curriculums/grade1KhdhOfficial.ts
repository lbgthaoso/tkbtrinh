// ============================================================================
// KẾ HOẠCH DẠY HỌC CHÍNH THỨC KHỐI 1 - NĂM HỌC 2026-2027 (KẾT NỐI TRI THỨC)
// Trường Tiểu học Tân Thạnh - Phân hiệu Trường Chính - Lớp 1A1
// GVCN: Nguyễn Phan Thị Kiều Phương | Hiệu trưởng: Trương Thị Kim Dương
// ============================================================================

export interface Grade1SubjectItem {
  title: string;
  sub?: string;
  period: number;
  integ?: string;
}

// 1. MÔN TIẾNG VIỆT (12 tiết/tuần x 35 tuần = 420 tiết/năm)
// Học kỳ 1: Tuần 1 -> 18 (216 tiết) | Học kỳ 2: Tuần 19 -> 35 (204 tiết)
export const OFFICIAL_G1_TIENG_VIET: Record<number, Grade1SubjectItem[]> = {
  1: [
    { title: "Làm quen với trường lớp, bạn bè, đồ dùng học tập (Tiết 1)", sub: "Làm quen", period: 1 },
    { title: "Làm quen với trường lớp, bạn bè, đồ dùng học tập (Tiết 2)", sub: "Làm quen", period: 2 },
    { title: "Làm quen với tư thế đọc viết nói nghe (Tiết 1)", sub: "Làm quen", period: 3 },
    { title: "Làm quen với tư thế đọc viết nói nghe (Tiết 2)", sub: "Làm quen", period: 4 },
    { title: "Làm quen với các nét viết cơ bản, chữ số và dấu thanh (Tiết 1)", sub: "Làm quen", period: 5 },
    { title: "Làm quen với các nét viết cơ bản, chữ số và dấu thanh (Tiết 2)", sub: "Làm quen", period: 6 },
    { title: "Làm quen với các nét viết cơ bản, chữ số và dấu thanh (Tiết 3)", sub: "Làm quen", period: 7 },
    { title: "Làm quen với các nét viết cơ bản, chữ số và dấu thanh (Tiết 4)", sub: "Làm quen", period: 8 },
    { title: "Làm quen với bảng chữ cái (Tiết 5)", sub: "Làm quen", period: 9 },
    { title: "Làm quen với bảng chữ cái (Tiết 6)", sub: "Làm quen", period: 10 },
    { title: "Ôn luyện viết các nét cơ bản, đọc âm (Tiết 1)", sub: "Ôn luyện", period: 11 },
    { title: "Ôn luyện viết các nét cơ bản, đọc âm (Tiết 2)", sub: "Ôn luyện", period: 12 }
  ],
  2: [
    { title: "Bài 1: A a (Tiết 1)", sub: "Âm vần", period: 13 },
    { title: "Bài 1: A a (Tiết 2)", sub: "Âm vần", period: 14 },
    { title: "Bài 2: B b. Dấu huyền (Tiết 1)", sub: "Âm vần", period: 15 },
    { title: "Bài 2: B b. Dấu huyền (Tiết 2)", sub: "Âm vần", period: 16 },
    { title: "Bài 3: C c. Dấu sắc (Tiết 1)", sub: "Âm vần", period: 17 },
    { title: "Bài 3: C c. Dấu sắc (Tiết 2)", sub: "Âm vần", period: 18 },
    { title: "Bài 4: E e, Ê ê (Tiết 1)", sub: "Âm vần", period: 19 },
    { title: "Bài 4: E e, Ê ê (Tiết 2)", sub: "Âm vần", period: 20 },
    { title: "Bài 5: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 21 },
    { title: "Bài 5: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 22 },
    { title: "Ôn đọc, viết (Tiết 23)", sub: "Ôn đọc viết", period: 23 },
    { title: "Ôn đọc, viết (Tiết 24)", sub: "Ôn đọc viết", period: 24 }
  ],
  3: [
    { title: "Bài 6: O o. Dấu hỏi (Tiết 1)", sub: "Âm vần", period: 25 },
    { title: "Bài 6: O o. Dấu hỏi (Tiết 2)", sub: "Âm vần", period: 26 },
    { title: "Bài 7: Ô ô. Dấu nặng (Tiết 1)", sub: "Âm vần", period: 27 },
    { title: "Bài 7: Ô ô. Dấu nặng (Tiết 2)", sub: "Âm vần", period: 28 },
    { title: "Bài 8: D d, Đ đ (Tiết 1)", sub: "Âm vần", period: 29 },
    { title: "Bài 8: D d, Đ đ (Tiết 2)", sub: "Âm vần", period: 30 },
    { title: "Bài 9: Ơ ơ. Dấu ngã (Tiết 1)", sub: "Âm vần", period: 31 },
    { title: "Bài 9: Ơ ơ. Dấu ngã (Tiết 2)", sub: "Âm vần", period: 32 },
    { title: "Bài 10: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 33, integ: "Không bắt buộc HS kể cả câu chuyện" },
    { title: "Bài 10: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 34, integ: "Không bắt buộc HS kể cả câu chuyện" },
    { title: "Ôn tập: Luyện đọc, viết o, ô", sub: "Luyện đọc viết", period: 35 },
    { title: "Ôn tập: Luyện đọc, viết ơ, d, đ", sub: "Luyện đọc viết", period: 36 }
  ],
  4: [
    { title: "Bài 11: I i, K k (Tiết 1)", sub: "Âm vần", period: 37, integ: "NLS 2.2.CB1a, 4.1.CB1a, 4.2.CB1a: Nhận biết bảo vệ thiết bị, dữ liệu số cá nhân đơn giản" },
    { title: "Bài 11: I i, K k (Tiết 2)", sub: "Âm vần", period: 38, integ: "NLS 2.2.CB1a, 4.1.CB1a, 4.2.CB1a: Nhận biết bảo vệ thiết bị, dữ liệu số cá nhân đơn giản" },
    { title: "Bài 12: H h, L l (Tiết 1)", sub: "Âm vần", period: 39 },
    { title: "Bài 12: H h, L l (Tiết 2)", sub: "Âm vần", period: 40 },
    { title: "Bài 13: U u, Ư ư (Tiết 1)", sub: "Âm vần", period: 41 },
    { title: "Bài 13: U u, Ư ư (Tiết 2)", sub: "Âm vần", period: 42 },
    { title: "Bài 14: Ch ch, Kh kh (Tiết 1)", sub: "Âm vần", period: 43 },
    { title: "Bài 14: Ch ch, Kh kh (Tiết 2)", sub: "Âm vần", period: 44 },
    { title: "Bài 15: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 45 },
    { title: "Bài 15: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 46 },
    { title: "Ôn tập: Luyện đọc, viết i, k, h, l", sub: "Luyện đọc viết", period: 47 },
    { title: "Ôn tập: Luyện đọc, viết u, ư, ch, kh", sub: "Luyện đọc viết", period: 48 }
  ],
  5: [
    { title: "Bài 16: M m, N n (Tiết 1)", sub: "Âm vần", period: 49 },
    { title: "Bài 16: M m, N n (Tiết 2)", sub: "Âm vần", period: 50 },
    { title: "Bài 17: G g, Gi gi (Tiết 1)", sub: "Âm vần", period: 51, integ: "Tích hợp AI: NLa - HS nêu được ví dụ AI học từ hình ảnh do con người cung cấp để nhận biết vật nuôi gà, cá" },
    { title: "Bài 17: G g, Gi gi (Tiết 2)", sub: "Âm vần", period: 52, integ: "Tích hợp AI: NLa - Video minh họa ứng dụng phân loại con vật" },
    { title: "Bài 18: Gh gh, Nh nh (Tiết 1)", sub: "Âm vần", period: 53 },
    { title: "Bài 18: Gh gh, Nh nh (Tiết 2)", sub: "Âm vần", period: 54 },
    { title: "Bài 19: Ng ng, Ngh ngh (Tiết 1)", sub: "Âm vần", period: 55, integ: "NLS 2.2.CB1a, 4.1.CB1a, 4.2.CB1a: Bảo vệ thiết bị và dữ liệu cá nhân" },
    { title: "Bài 19: Ng ng, Ngh ngh (Tiết 2)", sub: "Âm vần", period: 56, integ: "NLS 2.2.CB1a, 4.1.CB1a, 4.2.CB1a: Bảo vệ dữ liệu cá nhân trong môi trường số" },
    { title: "Bài 20: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 57 },
    { title: "Bài 20: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 58 },
    { title: "Ôn tập: Luyện đọc, viết m, n, g, gi", sub: "Luyện đọc viết", period: 59 },
    { title: "Ôn tập: Luyện đọc, viết gh, nh, ng, ngh", sub: "Luyện đọc viết", period: 60 }
  ],
  6: [
    { title: "Bài 21: R r, S s (Tiết 1)", sub: "Âm vần", period: 61 },
    { title: "Bài 21: R r, S s (Tiết 2)", sub: "Âm vần", period: 62 },
    { title: "Bài 22: T t, Tr tr (Tiết 1)", sub: "Âm vần", period: 63 },
    { title: "Bài 22: T t, Tr tr (Tiết 2)", sub: "Âm vần", period: 64 },
    { title: "Bài 23: Th th, ia (Tiết 1)", sub: "Âm vần", period: 65 },
    { title: "Bài 23: Th th, ia (Tiết 2)", sub: "Âm vần", period: 66 },
    { title: "Bài 24: ua, ưa (Tiết 1)", sub: "Âm vần", period: 67 },
    { title: "Bài 24: ua, ưa (Tiết 2)", sub: "Âm vần", period: 68 },
    { title: "Bài 25: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 69 },
    { title: "Bài 25: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 70 },
    { title: "Ôn tập: Luyện đọc, viết r, s, t, tr", sub: "Luyện đọc viết", period: 71 },
    { title: "Ôn tập: Luyện đọc, viết th, ia, ua, ưa", sub: "Luyện đọc viết", period: 72 }
  ],
  7: [
    { title: "Bài 26: Ph ph, Qu qu (Tiết 1)", sub: "Âm vần", period: 73 },
    { title: "Bài 26: Ph ph, Qu qu (Tiết 2)", sub: "Âm vần", period: 74 },
    { title: "Bài 27: V v, X x (Tiết 1)", sub: "Âm vần", period: 75 },
    { title: "Bài 27: V v, X x (Tiết 2)", sub: "Âm vần", period: 76 },
    { title: "Bài 28: Y y (Tiết 1)", sub: "Âm vần", period: 77 },
    { title: "Bài 28: Y y (Tiết 2)", sub: "Âm vần", period: 78 },
    { title: "Bài 29: Luyện tập chính tả (Tiết 1)", sub: "Chính tả", period: 79 },
    { title: "Bài 29: Luyện tập chính tả (Tiết 2)", sub: "Chính tả", period: 80 },
    { title: "Bài 30: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 81, integ: "Không bắt buộc HS kể cả câu chuyện" },
    { title: "Bài 30: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 82, integ: "Không bắt buộc HS kể cả câu chuyện" },
    { title: "Ôn tập: Luyện đọc, viết ph, qu, v, x", sub: "Luyện đọc viết", period: 83 },
    { title: "Ôn tập: Luyện viết đúng chính tả", sub: "Luyện viết", period: 84 }
  ],
  8: [
    { title: "Bài 31: an, ăn, ân (Tiết 1)", sub: "Âm vần", period: 85 },
    { title: "Bài 31: an, ăn, ân (Tiết 2)", sub: "Âm vần", period: 86 },
    { title: "Bài 32: on, ôn, ơn (Tiết 1)", sub: "Âm vần", period: 87 },
    { title: "Bài 32: on, ôn, ơn (Tiết 2)", sub: "Âm vần", period: 88 },
    { title: "Bài 33: en, ên, in, un (Tiết 1)", sub: "Âm vần", period: 89 },
    { title: "Bài 33: en, ên, in, un (Tiết 2)", sub: "Âm vần", period: 90 },
    { title: "Bài 34: am, ăm, âm (Tiết 1)", sub: "Âm vần", period: 91, integ: "Giáo dục BVMT: Giữ gìn và bảo vệ môi trường nơi các loài vật sinh sống" },
    { title: "Bài 34: am, ăm, âm (Tiết 2)", sub: "Âm vần", period: 92, integ: "Giáo dục BVMT: Giữ gìn môi trường sống cho động vật" },
    { title: "Bài 35: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 93 },
    { title: "Bài 35: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 94 },
    { title: "Ôn tập: Luyện đọc, viết an, ăn, ân, on, ôn, ơn", sub: "Luyện đọc viết", period: 95 },
    { title: "Ôn tập: Luyện đọc, viết en, ên, in, un, am, ăm, âm", sub: "Luyện đọc viết", period: 96 }
  ],
  9: [
    { title: "Bài 36: om, ôm, ơm (Tiết 1)", sub: "Âm vần", period: 97 },
    { title: "Bài 36: om, ôm, ơm (Tiết 2)", sub: "Âm vần", period: 98 },
    { title: "Bài 37: em, êm, im, um (Tiết 1)", sub: "Âm vần", period: 99 },
    { title: "Bài 37: em, êm, im, um (Tiết 2)", sub: "Âm vần", period: 100 },
    { title: "Bài 38: ai, ay, ây (Tiết 1)", sub: "Âm vần", period: 101 },
    { title: "Bài 38: ai, ay, ây (Tiết 2)", sub: "Âm vần", period: 102 },
    { title: "Bài 39: oi, ôi, ơi (Tiết 1)", sub: "Âm vần", period: 103 },
    { title: "Bài 39: oi, ôi, ơi (Tiết 2)", sub: "Âm vần", period: 104 },
    { title: "Bài 40: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 105 },
    { title: "Bài 40: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 106 },
    { title: "Ôn tập: Luyện đọc, viết om, ôm, ơm, em, êm, im, um", sub: "Luyện đọc viết", period: 107 },
    { title: "Ôn tập: Luyện đọc, viết ai, ay, ây, oi, ôi, ơi", sub: "Luyện đọc viết", period: 108 }
  ],
  10: [
    { title: "Bài 41: ui, ưi (Tiết 1)", sub: "Âm vần", period: 109, integ: "NLS 1.1.CB1a: Nhận biết chức năng liên lạc của điện thoại, thư điện tử" },
    { title: "Bài 41: ui, ưi (Tiết 2)", sub: "Âm vần", period: 110, integ: "NLS 1.1.CB1a: Nhận biết chức năng liên lạc điện thoại, thư điện tử" },
    { title: "Bài 42: ao, eo (Tiết 1)", sub: "Âm vần", period: 111 },
    { title: "Bài 42: ao, eo (Tiết 2)", sub: "Âm vần", period: 112 },
    { title: "Bài 43: au, âu, êu (Tiết 1)", sub: "Âm vần", period: 113 },
    { title: "Bài 43: au, âu, êu (Tiết 2)", sub: "Âm vần", period: 114 },
    { title: "Bài 44: iu, ưu (Tiết 1)", sub: "Âm vần", period: 115 },
    { title: "Bài 44: iu, ưu (Tiết 2)", sub: "Âm vần", period: 116 },
    { title: "Bài 45: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 117 },
    { title: "Bài 45: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 118 },
    { title: "Ôn tập: Luyện đọc, viết ui, ưi, ao, eo", sub: "Luyện đọc viết", period: 119 },
    { title: "Ôn tập: Luyện đọc, viết au, âu, êu, iu, ưu", sub: "Luyện đọc viết", period: 120 }
  ],
  11: [
    { title: "Bài 46: ac, ăc, âc (Tiết 1)", sub: "Âm vần", period: 121 },
    { title: "Bài 46: ac, ăc, âc (Tiết 2)", sub: "Âm vần", period: 122 },
    { title: "Bài 47: oc, ôc, uc, ưc (Tiết 1)", sub: "Âm vần", period: 123 },
    { title: "Bài 47: oc, ôc, uc, ưc (Tiết 2)", sub: "Âm vần", period: 124 },
    { title: "Bài 48: at, ăt, ât (Tiết 1)", sub: "Âm vần", period: 125 },
    { title: "Bài 48: at, ăt, ât (Tiết 2)", sub: "Âm vần", period: 126 },
    { title: "Bài 49: ot, ôt, ơt (Tiết 1)", sub: "Âm vần", period: 127, integ: "NLS 1.1.CB1b: Nhận biết chức năng chơi trò chơi trên thiết bị thông minh" },
    { title: "Bài 49: ot, ôt, ơt (Tiết 2)", sub: "Âm vần", period: 128, integ: "NLS 1.1.CB1b: Nhận biết chức năng chơi trò chơi trên thiết bị thông minh" },
    { title: "Bài 50: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 129, integ: "Tích hợp AI: NLa - Con người có cảm xúc thật; Robot chỉ thể hiện lời nói biểu cảm theo dữ liệu" },
    { title: "Bài 50: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 130, integ: "Tích hợp AI: NLa - Phân biệt cảm xúc con người và lời nói robot" },
    { title: "Ôn tập: Luyện đọc, viết ac, ăc, âc, oc, ôc, uc, ưc", sub: "Luyện đọc viết", period: 131 },
    { title: "Ôn tập: Luyện đọc, viết at, ăt, ât, ot, ôt, ơt", sub: "Luyện đọc viết", period: 132 }
  ],
  12: [
    { title: "Bài 51: et, êt, it (Tiết 1)", sub: "Âm vần", period: 133 },
    { title: "Bài 51: et, êt, it (Tiết 2)", sub: "Âm vần", period: 134 },
    { title: "Bài 52: ut, ưt (Tiết 1)", sub: "Âm vần", period: 135 },
    { title: "Bài 52: ut, ưt (Tiết 2)", sub: "Âm vần", period: 136 },
    { title: "Bài 53: ap, ăp, âp (Tiết 1)", sub: "Âm vần", period: 137, integ: "NLS 1.1.CB1b: Nhận biết chức năng thông tin trên ti vi" },
    { title: "Bài 53: ap, ăp, âp (Tiết 2)", sub: "Âm vần", period: 138, integ: "NLS 1.1.CB1b: Nhận biết chức năng thông tin trên ti vi" },
    { title: "Bài 54: op, ôp, ơp (Tiết 1)", sub: "Âm vần", period: 139 },
    { title: "Bài 54: op, ôp, ơp (Tiết 2)", sub: "Âm vần", period: 140 },
    { title: "Bài 55: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 141 },
    { title: "Bài 55: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 142 },
    { title: "Ôn tập: Luyện đọc, viết et, êt, it, ut, ưt", sub: "Luyện đọc viết", period: 143 },
    { title: "Ôn tập: Luyện đọc, viết ap, ăp, âp, op, ôp, ơp", sub: "Luyện đọc viết", period: 144 }
  ],
  13: [
    { title: "Bài 56: ep, êp, ip, up (Tiết 1)", sub: "Âm vần", period: 145 },
    { title: "Bài 56: ep, êp, ip, up (Tiết 2)", sub: "Âm vần", period: 146 },
    { title: "Bài 57: anh, ênh, inh (Tiết 1)", sub: "Âm vần", period: 147 },
    { title: "Bài 57: anh, ênh, inh (Tiết 2)", sub: "Âm vần", period: 148 },
    { title: "Bài 58: ach, êch, ich (Tiết 1)", sub: "Âm vần", period: 149, integ: "NLS 1.1.CB1b: Nhận biết chức năng xem lịch trên điện thoại, máy tính" },
    { title: "Bài 58: ach, êch, ich (Tiết 2)", sub: "Âm vần", period: 150, integ: "NLS 1.1.CB1b: Nhận biết chức năng xem lịch trên điện thoại, máy tính" },
    { title: "Bài 59: ang, ăng, âng (Tiết 1)", sub: "Âm vần", period: 151 },
    { title: "Bài 59: ang, ăng, âng (Tiết 2)", sub: "Âm vần", period: 152 },
    { title: "Bài 60: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 153 },
    { title: "Bài 60: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 154 },
    { title: "Ôn tập: Luyện đọc, viết ep, êp, ip, up, anh, ênh, inh", sub: "Luyện đọc viết", period: 155 },
    { title: "Ôn tập: Luyện đọc, viết ach, êch, ich, ang, ăng, âng", sub: "Luyện đọc viết", period: 156 }
  ],
  14: [
    { title: "Bài 61: ong, ông, ung, ưng (Tiết 1)", sub: "Âm vần", period: 157 },
    { title: "Bài 61: ong, ông, ung, ưng (Tiết 2)", sub: "Âm vần", period: 158 },
    { title: "Bài 62: iêc, iên, iêp (Tiết 1)", sub: "Âm vần", period: 159 },
    { title: "Bài 62: iêc, iên, iêp (Tiết 2)", sub: "Âm vần", period: 160 },
    { title: "Bài 63: iêng, iêm, yên (Tiết 1)", sub: "Âm vần", period: 161 },
    { title: "Bài 63: iêng, iêm, yên (Tiết 2)", sub: "Âm vần", period: 162 },
    { title: "Bài 64: iêt, iêu, yêu (Tiết 1)", sub: "Âm vần", period: 163 },
    { title: "Bài 64: iêt, iêu, yêu (Tiết 2)", sub: "Âm vần", period: 164 },
    { title: "Bài 65: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 165 },
    { title: "Bài 65: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 166 },
    { title: "Ôn tập: Luyện đọc, viết ong, ông, ung, ưng, iêc, iên, iêp", sub: "Luyện đọc viết", period: 167 },
    { title: "Ôn tập: Luyện đọc, viết iêng, iêm, yên, iêt, iêu, yêu", sub: "Luyện đọc viết", period: 168 }
  ],
  15: [
    { title: "Bài 66: uôi, uôm (Tiết 1)", sub: "Âm vần", period: 169 },
    { title: "Bài 66: uôi, uôm (Tiết 2)", sub: "Âm vần", period: 170 },
    { title: "Bài 67: uôc, uôt (Tiết 1)", sub: "Âm vần", period: 171 },
    { title: "Bài 67: uôc, uôt (Tiết 2)", sub: "Âm vần", period: 172 },
    { title: "Bài 68: uôn, uông (Tiết 1)", sub: "Âm vần", period: 173 },
    { title: "Bài 68: uôn, uông (Tiết 2)", sub: "Âm vần", period: 174 },
    { title: "Bài 69: ươi, ươu (Tiết 1)", sub: "Âm vần", period: 175 },
    { title: "Bài 69: ươi, ươu (Tiết 2)", sub: "Âm vần", period: 176 },
    { title: "Bài 70: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 177 },
    { title: "Bài 70: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 178 },
    { title: "Ôn tập: Luyện đọc, viết uôi, uôm, uôt, uôc", sub: "Luyện đọc viết", period: 179 },
    { title: "Ôn tập: Luyện đọc, viết uôn, uông, ươi, ươu", sub: "Luyện đọc viết", period: 180 }
  ],
  16: [
    { title: "Bài 71: ươc, ươt (Tiết 1)", sub: "Âm vần", period: 181 },
    { title: "Bài 71: ươc, ươt (Tiết 2)", sub: "Âm vần", period: 182 },
    { title: "Bài 72: ươm, ươp (Tiết 1)", sub: "Âm vần", period: 183 },
    { title: "Bài 72: ươm, ươp (Tiết 2)", sub: "Âm vần", period: 184 },
    { title: "Bài 73: ươn, ương (Tiết 1)", sub: "Âm vần", period: 185 },
    { title: "Bài 73: ươn, ương (Tiết 2)", sub: "Âm vần", period: 186 },
    { title: "Bài 74: oa, oe (Tiết 1)", sub: "Âm vần", period: 187 },
    { title: "Bài 74: oa, oe (Tiết 2)", sub: "Âm vần", period: 188 },
    { title: "Bài 75: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 189 },
    { title: "Bài 75: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 190 },
    { title: "Ôn tập: Luyện đọc, viết ươc, ươt, ươm, ươp", sub: "Luyện đọc viết", period: 191 },
    { title: "Ôn tập: Luyện đọc, viết ươn, ương, oa, oe", sub: "Luyện đọc viết", period: 192 }
  ],
  17: [
    { title: "Bài 76: oan, oăn, oat, oăt (Tiết 1)", sub: "Âm vần", period: 193 },
    { title: "Bài 76: oan, oăn, oat, oăt (Tiết 2)", sub: "Âm vần", period: 194 },
    { title: "Bài 77: oai, uê, uy (Tiết 1)", sub: "Âm vần", period: 195 },
    { title: "Bài 77: oai, uê, uy (Tiết 2)", sub: "Âm vần", period: 196 },
    { title: "Bài 78: uân, uât (Tiết 1)", sub: "Âm vần", period: 197 },
    { title: "Bài 78: uân, uât (Tiết 2)", sub: "Âm vần", period: 198 },
    { title: "Bài 79: uyên, uyêt (Tiết 1)", sub: "Âm vần", period: 199 },
    { title: "Bài 79: uyên, uyêt (Tiết 2)", sub: "Âm vần", period: 200 },
    { title: "Bài 80: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 201 },
    { title: "Bài 80: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 202 },
    { title: "Ôn tập: Luyện đọc, viết oan, oăn, oat, oăt, oai, uê, uy", sub: "Luyện đọc viết", period: 203 },
    { title: "Ôn tập: Luyện đọc, viết uân, uât, uyên, uyêt", sub: "Luyện đọc viết", period: 204 }
  ],
  18: [
    { title: "Bài 81: Ôn tập cuối học kì 1 (Tiết 1)", sub: "Ôn tập", period: 205 },
    { title: "Bài 81: Ôn tập cuối học kì 1 (Tiết 2)", sub: "Ôn tập", period: 206 },
    { title: "Bài 82: Ôn tập cuối học kì 1 (Tiết 1)", sub: "Ôn tập", period: 207 },
    { title: "Bài 82: Ôn tập cuối học kì 1 (Tiết 2)", sub: "Ôn tập", period: 208 },
    { title: "Bài 83: Ôn tập cuối học kì 1 (Tiết 1)", sub: "Ôn tập", period: 209 },
    { title: "Bài 83: Ôn tập cuối học kì 1 (Tiết 2)", sub: "Ôn tập", period: 210 },
    { title: "Ôn tập: Luyện đọc, viết các chữ hoa (Tiết 1)", sub: "Luyện đọc viết", period: 211 },
    { title: "Ôn tập: Luyện đọc, viết các chữ hoa (Tiết 2)", sub: "Luyện đọc viết", period: 212 },
    { title: "Đánh giá cuối kì (Tiết 1)", sub: "Đánh giá", period: 213 },
    { title: "Đánh giá cuối kì (Tiết 2)", sub: "Đánh giá", period: 214 },
    { title: "Tổng kết học kì 1 (Tiết 1)", sub: "Tổng kết", period: 215 },
    { title: "Tổng kết học kì 1 (Tiết 2)", sub: "Tổng kết", period: 216 }
  ],
  // HỌC KỲ 2: PHẦN LUYỆN TẬP TỔNG HỢP (TUẦN 19 - 35)
  19: [
    { title: "Bài 1: Tôi là học sinh lớp 1 (Tiết 1)", sub: "Tôi và các bạn", period: 217 },
    { title: "Bài 1: Tôi là học sinh lớp 1 (Tiết 2)", sub: "Tôi và các bạn", period: 218 },
    { title: "Bài 1: Tôi là học sinh lớp 1 (Tiết 3)", sub: "Tôi và các bạn", period: 219 },
    { title: "Bài 1: Tôi là học sinh lớp 1 (Tiết 4)", sub: "Tôi và các bạn", period: 220 },
    { title: "Bài 2: Đôi tai xấu xí (Tiết 1)", sub: "Tôi và các bạn", period: 221, integ: "NLS 1.1.CB1b: Nhận biết chức năng định vị, xem bản đồ trên các thiết bị thông minh" },
    { title: "Bài 2: Đôi tai xấu xí (Tiết 2)", sub: "Tôi và các bạn", period: 222, integ: "NLS 1.1.CB1b: Xem bản đồ số định vị trên điện thoại/máy tính" },
    { title: "Bài 2: Đôi tai xấu xí (Tiết 3)", sub: "Tôi và các bạn", period: 223 },
    { title: "Bài 2: Đôi tai xấu xí (Tiết 4)", sub: "Tôi và các bạn", period: 224 },
    { title: "Bài 3: Bạn của gió (Tiết 1)", sub: "Tôi và các bạn", period: 225 },
    { title: "Bài 3: Bạn của gió (Tiết 2)", sub: "Tôi và các bạn", period: 226 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 227 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 228 }
  ],
  20: [
    { title: "Bài 4: Giải thưởng tình bạn (Tiết 1)", sub: "Mái ấm gia đình", period: 229 },
    { title: "Bài 4: Giải thưởng tình bạn (Tiết 2)", sub: "Mái ấm gia đình", period: 230 },
    { title: "Bài 4: Giải thưởng tình bạn (Tiết 3)", sub: "Mái ấm gia đình", period: 231 },
    { title: "Bài 4: Giải thưởng tình bạn (Tiết 4)", sub: "Mái ấm gia đình", period: 232 },
    { title: "Bài 5: Sinh nhật của voi con (Tiết 1)", sub: "Mái ấm gia đình", period: 233 },
    { title: "Bài 5: Sinh nhật của voi con (Tiết 2)", sub: "Mái ấm gia đình", period: 234 },
    { title: "Bài 5: Sinh nhật của voi con (Tiết 3)", sub: "Mái ấm gia đình", period: 235 },
    { title: "Bài 5: Sinh nhật của voi con (Tiết 4)", sub: "Mái ấm gia đình", period: 236 },
    { title: "Ôn tập (Tiết 1)", sub: "Ôn tập", period: 237 },
    { title: "Ôn tập (Tiết 2)", sub: "Ôn tập", period: 238 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 239 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 240 }
  ],
  21: [
    { title: "Bài 1: Nụ hôn trên đôi bàn tay (Tiết 1)", sub: "Mái ấm gia đình", period: 241 },
    { title: "Bài 1: Nụ hôn trên đôi bàn tay (Tiết 2)", sub: "Mái ấm gia đình", period: 242 },
    { title: "Bài 1: Nụ hôn trên đôi bàn tay (Tiết 3)", sub: "Mái ấm gia đình", period: 243 },
    { title: "Bài 1: Nụ hôn trên đôi bàn tay (Tiết 4)", sub: "Mái ấm gia đình", period: 244 },
    { title: "Bài 2: Làm Anh (Tiết 1)", sub: "Mái ấm gia đình", period: 245 },
    { title: "Bài 2: Làm Anh (Tiết 2)", sub: "Mái ấm gia đình", period: 246 },
    { title: "Bài 3: Cả nhà đi chơi núi (Tiết 1)", sub: "Mái ấm gia đình", period: 247 },
    { title: "Bài 3: Cả nhà đi chơi núi (Tiết 2)", sub: "Mái ấm gia đình", period: 248 },
    { title: "Bài 3: Cả nhà đi chơi núi (Tiết 3)", sub: "Mái ấm gia đình", period: 249 },
    { title: "Bài 3: Cả nhà đi chơi núi (Tiết 4)", sub: "Mái ấm gia đình", period: 250 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 251 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 252 }
  ],
  22: [
    { title: "Bài 4: Quạt cho bà ngủ (Tiết 1)", sub: "Mái ấm gia đình", period: 253 },
    { title: "Bài 4: Quạt cho bà ngủ (Tiết 2)", sub: "Mái ấm gia đình", period: 254 },
    { title: "Bài 5: Bữa cơm gia đình (Tiết 1)", sub: "Mái ấm gia đình", period: 255 },
    { title: "Bài 5: Bữa cơm gia đình (Tiết 2)", sub: "Mái ấm gia đình", period: 256 },
    { title: "Bài 5: Bữa cơm gia đình (Tiết 3)", sub: "Mái ấm gia đình", period: 257 },
    { title: "Bài 5: Bữa cơm gia đình (Tiết 4)", sub: "Mái ấm gia đình", period: 258 },
    { title: "Bài 6: Ngôi nhà (Tiết 1)", sub: "Mái ấm gia đình", period: 259, integ: "NLS 1.1.CB1a: Nhận diện phân biệt hình dạng và chức năng các thiết bị kỹ thuật số thông dụng" },
    { title: "Bài 6: Ngôi nhà (Tiết 2)", sub: "Mái ấm gia đình", period: 260, integ: "NLS 1.1.CB1a: Nhận diện chức năng thiết bị kỹ thuật số thông dụng" },
    { title: "Ôn tập (Tiết 1)", sub: "Ôn tập", period: 261 },
    { title: "Ôn tập (Tiết 2)", sub: "Ôn tập", period: 262 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 263 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 264 }
  ],
  23: [
    { title: "Bài 1: Tôi đi học (Tiết 1)", sub: "Mái trường mến yêu", period: 265 },
    { title: "Bài 1: Tôi đi học (Tiết 2)", sub: "Mái trường mến yêu", period: 266 },
    { title: "Bài 1: Tôi đi học (Tiết 3)", sub: "Mái trường mến yêu", period: 267 },
    { title: "Bài 1: Tôi đi học (Tiết 4)", sub: "Mái trường mến yêu", period: 268 },
    { title: "Bài 2: Đi học (Tiết 1)", sub: "Mái trường mến yêu", period: 269 },
    { title: "Bài 2: Đi học (Tiết 2)", sub: "Mái trường mến yêu", period: 270 },
    { title: "Bài 3: Hoa yêu thương (Tiết 1)", sub: "Mái trường mến yêu", period: 271 },
    { title: "Bài 3: Hoa yêu thương (Tiết 2)", sub: "Mái trường mến yêu", period: 272 },
    { title: "Bài 3: Hoa yêu thương (Tiết 3)", sub: "Mái trường mến yêu", period: 273 },
    { title: "Bài 3: Hoa yêu thương (Tiết 4)", sub: "Mái trường mến yêu", period: 274 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 275 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 276 }
  ],
  24: [
    { title: "Bài 4: Cây bàng và lớp học (Tiết 1)", sub: "Mái trường mến yêu", period: 277 },
    { title: "Bài 4: Cây bàng và lớp học (Tiết 2)", sub: "Mái trường mến yêu", period: 278 },
    { title: "Bài 5: Bác trống trường (Tiết 1)", sub: "Mái trường mến yêu", period: 279 },
    { title: "Bài 5: Bác trống trường (Tiết 2)", sub: "Mái trường mến yêu", period: 280 },
    { title: "Bài 5: Bác trống trường (Tiết 3)", sub: "Mái trường mến yêu", period: 281 },
    { title: "Bài 5: Bác trống trường (Tiết 4)", sub: "Mái trường mến yêu", period: 282 },
    { title: "Bài 6: Giờ ra chơi (Tiết 1)", sub: "Mái trường mến yêu", period: 283 },
    { title: "Bài 6: Giờ ra chơi (Tiết 2)", sub: "Mái trường mến yêu", period: 284 },
    { title: "Ôn tập (Tiết 1)", sub: "Ôn tập", period: 285 },
    { title: "Ôn tập (Tiết 2)", sub: "Ôn tập", period: 286 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 287 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 288 }
  ],
  25: [
    { title: "Bài 1: Rửa tay trước khi ăn (Tiết 1)", sub: "Điều em cần biết", period: 289 },
    { title: "Bài 1: Rửa tay trước khi ăn (Tiết 2)", sub: "Điều em cần biết", period: 290 },
    { title: "Bài 1: Rửa tay trước khi ăn (Tiết 3)", sub: "Điều em cần biết", period: 291 },
    { title: "Bài 1: Rửa tay trước khi ăn (Tiết 4)", sub: "Điều em cần biết", period: 292 },
    { title: "Bài 2: Lời chào (Tiết 1)", sub: "Điều em cần biết", period: 293 },
    { title: "Bài 2: Lời chào (Tiết 2)", sub: "Điều em cần biết", period: 294 },
    { title: "Bài 3: Khi mẹ vắng nhà (Tiết 1)", sub: "Điều em cần biết", period: 295 },
    { title: "Bài 3: Khi mẹ vắng nhà (Tiết 2)", sub: "Điều em cần biết", period: 296 },
    { title: "Bài 3: Khi mẹ vắng nhà (Tiết 3)", sub: "Điều em cần biết", period: 297 },
    { title: "Bài 3: Khi mẹ vắng nhà (Tiết 4)", sub: "Điều em cần biết", period: 298 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 299 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 300 }
  ],
  26: [
    { title: "Bài 4: Nếu không may bị lạc (Tiết 1)", sub: "Điều em cần biết", period: 301 },
    { title: "Bài 4: Nếu không may bị lạc (Tiết 2)", sub: "Điều em cần biết", period: 302 },
    { title: "Bài 4: Nếu không may bị lạc (Tiết 3)", sub: "Điều em cần biết", period: 303 },
    { title: "Bài 4: Nếu không may bị lạc (Tiết 4)", sub: "Điều em cần biết", period: 304 },
    { title: "Bài 5: Đèn giao thông (Tiết 1)", sub: "Điều em cần biết", period: 305, integ: "NLS 3.4.CB1a, 5.1.CB1b: Chuẩn mực hành vi & chọn biện pháp an toàn bảo mật đơn giản" },
    { title: "Bài 5: Đèn giao thông (Tiết 2)", sub: "Điều em cần biết", period: 306, integ: "NLS 3.4.CB1a, 5.1.CB1b: Tương tác an toàn trong môi trường kĩ thuật số" },
    { title: "Bài 5: Đèn giao thông (Tiết 3)", sub: "Điều em cần biết", period: 307 },
    { title: "Bài 5: Đèn giao thông (Tiết 4)", sub: "Điều em cần biết", period: 308 },
    { title: "Ôn tập (Tiết 1)", sub: "Ôn tập", period: 309 },
    { title: "Ôn tập (Tiết 2)", sub: "Ôn tập", period: 310 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 311 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 312 }
  ],
  27: [
    { title: "Bài 1: Kiến và chim bồ câu (Tiết 1)", sub: "Bài học từ cuộc sống", period: 313 },
    { title: "Bài 1: Kiến và chim bồ câu (Tiết 2)", sub: "Bài học từ cuộc sống", period: 314 },
    { title: "Bài 1: Kiến và chim bồ câu (Tiết 3)", sub: "Bài học từ cuộc sống", period: 315 },
    { title: "Bài 1: Kiến và chim bồ câu (Tiết 4)", sub: "Bài học từ cuộc sống", period: 316 },
    { title: "Bài 2: Câu chuyện của rễ (Tiết 1)", sub: "Bài học từ cuộc sống", period: 317 },
    { title: "Bài 2: Câu chuyện của rễ (Tiết 2)", sub: "Bài học từ cuộc sống", period: 318 },
    { title: "Bài 3: Câu hỏi của sói (Tiết 1)", sub: "Bài học từ cuộc sống", period: 319 },
    { title: "Bài 3: Câu hỏi của sói (Tiết 2)", sub: "Bài học từ cuộc sống", period: 320 },
    { title: "Bài 3: Câu hỏi của sói (Tiết 3)", sub: "Bài học từ cuộc sống", period: 321 },
    { title: "Bài 3: Câu hỏi của sói (Tiết 4)", sub: "Bài học từ cuộc sống", period: 322 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 323 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 324 }
  ],
  28: [
    { title: "Bài 4: Chú bé chăn cừu (Tiết 1)", sub: "Bài học từ cuộc sống", period: 325 },
    { title: "Bài 4: Chú bé chăn cừu (Tiết 2)", sub: "Bài học từ cuộc sống", period: 326 },
    { title: "Bài 4: Chú bé chăn cừu (Tiết 3)", sub: "Bài học từ cuộc sống", period: 327 },
    { title: "Bài 4: Chú bé chăn cừu (Tiết 4)", sub: "Bài học từ cuộc sống", period: 328 },
    { title: "Bài 5: Tiếng vọng của núi (Tiết 1)", sub: "Bài học từ cuộc sống", period: 329 },
    { title: "Bài 5: Tiếng vọng của núi (Tiết 2)", sub: "Bài học từ cuộc sống", period: 330 },
    { title: "Bài 5: Tiếng vọng của núi (Tiết 3)", sub: "Bài học từ cuộc sống", period: 331 },
    { title: "Bài 5: Tiếng vọng của núi (Tiết 4)", sub: "Bài học từ cuộc sống", period: 332 },
    { title: "Ôn tập (Tiết 1)", sub: "Ôn tập", period: 333 },
    { title: "Ôn tập (Tiết 2)", sub: "Ôn tập", period: 334 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 335 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 336 }
  ],
  29: [
    { title: "Bài 1: Loài chim của biển cả (Tiết 1)", sub: "Thiên nhiên kì thú", period: 337 },
    { title: "Bài 1: Loài chim của biển cả (Tiết 2)", sub: "Thiên nhiên kì thú", period: 338 },
    { title: "Bài 1: Loài chim của biển cả (Tiết 3)", sub: "Thiên nhiên kì thú", period: 339 },
    { title: "Bài 1: Loài chim của biển cả (Tiết 4)", sub: "Thiên nhiên kì thú", period: 340 },
    { title: "Bài 2: Bảy sắc cầu vồng (Tiết 1)", sub: "Thiên nhiên kì thú", period: 341, integ: "NLS 1.1.CB1b, 5.1.CB1b: Nhận biết một số chức năng thiết bị số & an toàn bảo mật đơn giản" },
    { title: "Bài 2: Bảy sắc cầu vồng (Tiết 2)", sub: "Thiên nhiên kì thú", period: 342, integ: "NLS 1.1.CB1b, 5.1.CB1b: Chọn biện pháp an toàn bảo mật đơn giản" },
    { title: "Bài 3: Chúa tể rừng xanh (Tiết 1)", sub: "Thiên nhiên kì thú", period: 343 },
    { title: "Bài 3: Chúa tể rừng xanh (Tiết 2)", sub: "Thiên nhiên kì thú", period: 344 },
    { title: "Bài 3: Chúa tể rừng xanh (Tiết 3)", sub: "Thiên nhiên kì thú", period: 345 },
    { title: "Bài 3: Chúa tể rừng xanh (Tiết 4)", sub: "Thiên nhiên kì thú", period: 346 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 347 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 348 }
  ],
  30: [
    { title: "Bài 4: Cuộc thi tài năng rừng xanh (Tiết 1)", sub: "Thiên nhiên kì thú", period: 349 },
    { title: "Bài 4: Cuộc thi tài năng rừng xanh (Tiết 2)", sub: "Thiên nhiên kì thú", period: 350 },
    { title: "Bài 4: Cuộc thi tài năng rừng xanh (Tiết 3)", sub: "Thiên nhiên kì thú", period: 351 },
    { title: "Bài 4: Cuộc thi tài năng rừng xanh (Tiết 4)", sub: "Thiên nhiên kì thú", period: 352 },
    { title: "Bài 5: Cây liễu dẻo dai (Tiết 1)", sub: "Thiên nhiên kì thú", period: 353 },
    { title: "Bài 5: Cây liễu dẻo dai (Tiết 2)", sub: "Thiên nhiên kì thú", period: 354 },
    { title: "Bài 5: Cây liễu dẻo dai (Tiết 3)", sub: "Thiên nhiên kì thú", period: 355 },
    { title: "Bài 5: Cây liễu dẻo dai (Tiết 4)", sub: "Thiên nhiên kì thú", period: 356 },
    { title: "Ôn tập (Tiết 1)", sub: "Ôn tập", period: 357 },
    { title: "Ôn tập (Tiết 2)", sub: "Ôn tập", period: 358 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 359 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 360 }
  ],
  31: [
    { title: "Bài 1: Tia nắng đi đâu? (Tiết 1)", sub: "Thiên nhiên kì thú", period: 361 },
    { title: "Bài 1: Tia nắng đi đâu? (Tiết 2)", sub: "Thiên nhiên kì thú", period: 362 },
    { title: "Bài 2: Trong giấc mơ buổi sáng (Tiết 1)", sub: "Thiên nhiên kì thú", period: 363 },
    { title: "Bài 2: Trong giấc mơ buổi sáng (Tiết 2)", sub: "Thiên nhiên kì thú", period: 364 },
    { title: "Bài 3: Ngày mới bắt đầu (Tiết 1)", sub: "Thiên nhiên kì thú", period: 365 },
    { title: "Bài 3: Ngày mới bắt đầu (Tiết 2)", sub: "Thiên nhiên kì thú", period: 366 },
    { title: "Bài 3: Ngày mới bắt đầu (Tiết 3)", sub: "Thiên nhiên kì thú", period: 367 },
    { title: "Bài 3: Ngày mới bắt đầu (Tiết 4)", sub: "Thiên nhiên kì thú", period: 368 },
    { title: "Bài 4: Hỏi mẹ (Tiết 1)", sub: "Thiên nhiên kì thú", period: 369 },
    { title: "Bài 4: Hỏi mẹ (Tiết 2)", sub: "Thiên nhiên kì thú", period: 370 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 371 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 372 }
  ],
  32: [
    { title: "Bài 5: Những cánh cò (Tiết 1)", sub: "Đất nước và con người", period: 373 },
    { title: "Bài 5: Những cánh cò (Tiết 2)", sub: "Đất nước và con người", period: 374 },
    { title: "Bài 5: Những cánh cò (Tiết 3)", sub: "Đất nước và con người", period: 375 },
    { title: "Bài 5: Những cánh cò (Tiết 4)", sub: "Đất nước và con người", period: 376 },
    { title: "Bài 6: Buổi trưa hè (Tiết 1)", sub: "Đất nước và con người", period: 377 },
    { title: "Bài 6: Buổi trưa hè (Tiết 2)", sub: "Đất nước và con người", period: 378 },
    { title: "Bài 7: Hoa phượng (Tiết 1)", sub: "Đất nước và con người", period: 379 },
    { title: "Bài 7: Hoa phượng (Tiết 2)", sub: "Đất nước và con người", period: 380 },
    { title: "Ôn tập (Tiết 1)", sub: "Ôn tập", period: 381 },
    { title: "Ôn tập (Tiết 2)", sub: "Ôn tập", period: 382 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 383 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 384 }
  ],
  33: [
    { title: "Bài 1: Cậu bé thông minh (Tiết 1)", sub: "Đất nước và con người", period: 385, integ: "NLS 1.1.CB1b, 5.1.CB1b: Nhận biết chức năng trò chơi trên thiết bị thông minh & bảo mật đơn giản" },
    { title: "Bài 1: Cậu bé thông minh (Tiết 2)", sub: "Đất nước và con người", period: 386, integ: "NLS 1.1.CB1b, 5.1.CB1b: Nhận biết chức năng trò chơi trên thiết bị thông minh & bảo mật đơn giản" },
    { title: "Bài 1: Cậu bé thông minh (Tiết 3)", sub: "Đất nước và con người", period: 387 },
    { title: "Bài 1: Cậu bé thông minh (Tiết 4)", sub: "Đất nước và con người", period: 388 },
    { title: "Bài 2: Lính cứu hỏa (Tiết 1)", sub: "Đất nước và con người", period: 389 },
    { title: "Bài 2: Lính cứu hỏa (Tiết 2)", sub: "Đất nước và con người", period: 390 },
    { title: "Bài 2: Lính cứu hỏa (Tiết 3)", sub: "Đất nước và con người", period: 391 },
    { title: "Bài 2: Lính cứu hỏa (Tiết 4)", sub: "Đất nước và con người", period: 392 },
    { title: "Bài 3: Lớn lên bạn làm gì? (Tiết 1)", sub: "Đất nước và con người", period: 393 },
    { title: "Bài 3: Lớn lên bạn làm gì? (Tiết 2)", sub: "Đất nước và con người", period: 394 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 395 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 396 }
  ],
  34: [
    { title: "Bài 4: Ruộng bậc thang ở Sa Pa (Tiết 1)", sub: "Đất nước và con người", period: 397 },
    { title: "Bài 4: Ruộng bậc thang ở Sa Pa (Tiết 2)", sub: "Đất nước và con người", period: 398 },
    { title: "Bài 5: Nhớ ơn (Tiết 1)", sub: "Đất nước và con người", period: 399 },
    { title: "Bài 5: Nhớ ơn (Tiết 2)", sub: "Đất nước và con người", period: 400 },
    { title: "Bài 6: Du lịch biển Việt Nam (Tiết 1)", sub: "Đất nước và con người", period: 401 },
    { title: "Bài 6: Du lịch biển Việt Nam (Tiết 2)", sub: "Đất nước và con người", period: 402 },
    { title: "Bài 6: Du lịch biển Việt Nam (Tiết 3)", sub: "Đất nước và con người", period: 403 },
    { title: "Bài 6: Du lịch biển Việt Nam (Tiết 4)", sub: "Đất nước và con người", period: 404 },
    { title: "Ôn tập (Tiết 1)", sub: "Ôn tập", period: 405 },
    { title: "Ôn tập (Tiết 2)", sub: "Ôn tập", period: 406 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 407 },
    { title: "Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 408 }
  ],
  35: [
    { title: "Bài 1 (Tiết 1)", sub: "Ôn tập và đánh giá", period: 409 },
    { title: "Bài 1 (Tiết 2)", sub: "Ôn tập và đánh giá", period: 410 },
    { title: "Bài 2 (Tiết 1)", sub: "Ôn tập và đánh giá", period: 411 },
    { title: "Bài 2 (Tiết 2)", sub: "Ôn tập và đánh giá", period: 412 },
    { title: "Bài 3 (Tiết 1)", sub: "Ôn tập và đánh giá", period: 413 },
    { title: "Bài 3 (Tiết 2)", sub: "Ôn tập và đánh giá", period: 414 },
    { title: "Ôn tập: Luyện tập, thực hành củng cố các kĩ năng (Tiết 1)", sub: "Luyện tập", period: 415 },
    { title: "Ôn tập: Luyện tập, thực hành củng cố các kĩ năng (Tiết 2)", sub: "Luyện tập", period: 416 },
    { title: "Kiểm tra định kì cuối năm học (Tiết 1)", sub: "Kiểm tra", period: 417 },
    { title: "Kiểm tra định kì cuối năm học (Tiết 2)", sub: "Kiểm tra", period: 418 },
    { title: "Kiểm tra định kì cuối năm học (Tiết 3)", sub: "Kiểm tra", period: 419 },
    { title: "Kiểm tra định kì cuối năm học (Tiết 4)", sub: "Kiểm tra", period: 420 }
  ]
};

// 2. MÔN TOÁN (3 tiết/tuần x 35 tuần = 105 tiết/năm)
// Bao gồm các bài học STEM và Tích hợp AI / NLS theo kế hoạch chính thức
export const OFFICIAL_G1_TOAN: Record<number, Grade1SubjectItem[]> = {
  1: [
    { title: "Tiết học đầu tiên", sub: "Các số từ 0 đến 10", period: 1, integ: "Tích hợp AI: NLa: Nhận biết và kể tên robot, nhân vật Rô-bốt hỗ trợ học tập" },
    { title: "Các số 0, 1, 2, 3, 4, 5 (Tiết 1)", sub: "Các số từ 0 đến 10", period: 2, integ: "Tích hợp NLS 1.3.CB1b: Nơi sắp xếp dữ liệu, thông tin đơn giản trong môi trường có cấu trúc" },
    { title: "Các số 0, 1, 2, 3, 4, 5 (Tiết 2)", sub: "Các số từ 0 đến 10", period: 3 }
  ],
  2: [
    { title: "Các số 0, 1, 2, 3, 4, 5 (Tiết 3)", sub: "Các số từ 0 đến 10", period: 4 },
    { title: "Các số 6, 7, 8, 9, 10 (Tiết 1)", sub: "Các số từ 0 đến 10", period: 5 },
    { title: "Thay bằng Bài học STEM: Trải nghiệm cùng khay 10 học Toán (Tiết 1)", sub: "Bài học STEM", period: 6, integ: "Bài học STEM: Trải nghiệm cùng khay 10 học Toán (Tiết 1) - Tác giả Tường Duy Hải" }
  ],
  3: [
    { title: "Thay bằng Bài học STEM: Trải nghiệm cùng khay 10 học Toán (Tiết 2)", sub: "Bài học STEM", period: 7, integ: "Bài học STEM: Trải nghiệm cùng khay 10 học Toán (Tiết 2) - Hoàn thiện sản phẩm khay 10" },
    { title: "Nhiều hơn, ít hơn, bằng nhau (Tiết 1)", sub: "Các số từ 0 đến 10", period: 8 },
    { title: "Nhiều hơn, ít hơn, bằng nhau (Tiết 2)", sub: "Các số từ 0 đến 10", period: 9 }
  ],
  4: [
    { title: "So sánh số (Tiết 1)", sub: "Các số từ 0 đến 10", period: 10 },
    { title: "So sánh số (Tiết 2)", sub: "Các số từ 0 đến 10", period: 11 },
    { title: "So sánh số (Tiết 3)", sub: "Các số từ 0 đến 10", period: 12 }
  ],
  5: [
    { title: "So sánh số (Tiết 4)", sub: "Các số từ 0 đến 10", period: 13 },
    { title: "Mấy và mấy (Tiết 1)", sub: "Các số từ 0 đến 10", period: 14 },
    { title: "Mấy và mấy (Tiết 2)", sub: "Các số từ 0 đến 10", period: 15 }
  ],
  6: [
    { title: "Mấy và mấy (Tiết 3)", sub: "Các số từ 0 đến 10", period: 16 },
    { title: "Luyện tập chung (Tiết 1)", sub: "Các số từ 0 đến 10", period: 17 },
    { title: "Luyện tập chung (Tiết 2)", sub: "Các số từ 0 đến 10", period: 18 }
  ],
  7: [
    { title: "Luyện tập chung (Tiết 3)", sub: "Các số từ 0 đến 10", period: 19 },
    { title: "Luyện tập chung (tiếp theo)", sub: "Các số từ 0 đến 10", period: 20 },
    { title: "Hình vuông, hình tròn, hình tam giác, hình chữ nhật (Tiết 1)", sub: "Làm quen với hình phẳng", period: 21 }
  ],
  8: [
    { title: "Hình vuông, hình tròn, hình tam giác, hình chữ nhật (Tiết 2)", sub: "Làm quen với hình phẳng", period: 22 },
    { title: "Thực hành lắp ghép, xếp hình (Tiết 1)", sub: "Làm quen với hình phẳng", period: 23 },
    { title: "Thực hành lắp ghép, xếp hình (Tiết 2)", sub: "Làm quen với hình phẳng", period: 24 }
  ],
  9: [
    { title: "Luyện tập chung", sub: "Làm quen với hình phẳng", period: 25 },
    { title: "Phép cộng trong phạm vi 10 (Tiết 1)", sub: "Phép cộng trừ phạm vi 10", period: 26 },
    { title: "Phép cộng trong phạm vi 10 (Tiết 2)", sub: "Phép cộng trừ phạm vi 10", period: 27 }
  ],
  10: [
    { title: "Phép cộng trong phạm vi 10 (Tiết 3)", sub: "Phép cộng trừ phạm vi 10", period: 28 },
    { title: "Phép cộng trong phạm vi 10 (tiếp theo) (Tiết 4)", sub: "Phép cộng trừ phạm vi 10", period: 29 },
    { title: "Phép cộng trong phạm vi 10 (tiếp theo) (Tiết 5)", sub: "Phép cộng trừ phạm vi 10", period: 30 }
  ],
  11: [
    { title: "Phép cộng trong phạm vi 10 (tiếp theo) (Tiết 6)", sub: "Phép cộng trừ phạm vi 10", period: 31 },
    { title: "Phép trừ trong phạm vi 10 (Tiết 1)", sub: "Phép cộng trừ phạm vi 10", period: 32 },
    { title: "Phép trừ trong phạm vi 10 (Tiết 2)", sub: "Phép cộng trừ phạm vi 10", period: 33 }
  ],
  12: [
    { title: "Phép trừ trong phạm vi 10 (tiếp theo) (Tiết 3)", sub: "Phép cộng trừ phạm vi 10", period: 34 },
    { title: "Phép trừ trong phạm vi 10 (tiếp theo) (Tiết 4)", sub: "Phép cộng trừ phạm vi 10", period: 35 },
    { title: "Phép trừ trong phạm vi 10 (tiếp theo) (Tiết 5)", sub: "Phép cộng trừ phạm vi 10", period: 36 }
  ],
  13: [
    { title: "Phép trừ trong phạm vi 10 (tiếp theo) (Tiết 6)", sub: "Phép cộng trừ phạm vi 10", period: 37 },
    { title: "Bảng cộng, bảng trừ trong phạm vi 10 (Tiết 1)", sub: "Phép cộng trừ phạm vi 10", period: 38 },
    { title: "Bảng cộng, bảng trừ trong phạm vi 10 (Tiết 2)", sub: "Phép cộng trừ phạm vi 10", period: 39 }
  ],
  14: [
    { title: "Bảng cộng, bảng trừ trong phạm vi 10 (Tiết 3)", sub: "Phép cộng trừ phạm vi 10", period: 40 },
    { title: "Luyện tập chung (Tiết 1)", sub: "Phép cộng trừ phạm vi 10", period: 41 },
    { title: "Luyện tập chung (Tiết 2)", sub: "Phép cộng trừ phạm vi 10", period: 42 }
  ],
  15: [
    { title: "Luyện tập chung (Tiết 3)", sub: "Phép cộng trừ phạm vi 10", period: 43 },
    { title: "Khối lập phương, khối hộp chữ nhật (Tiết 1)", sub: "Làm quen với một số hình khối", period: 44, integ: "Tích hợp AI: NLa: Biết AI có thể hỗ trợ phân loại đồ vật theo hình khối nhưng cần kiểm tra bằng cầm nắm, quan sát" },
    { title: "Khối lập phương, khối hộp chữ nhật (Tiết 2)", sub: "Làm quen với một số hình khối", period: 45 }
  ],
  16: [
    { title: "Vị trí, định hướng trong không gian (Tiết 1)", sub: "Làm quen với một số hình khối", period: 46, integ: "Tích hợp AI: NLd: Làm quen với tư duy điều khiển, nói lệnh rõ ràng để robot/nhân vật di chuyển đúng vị trí. Trò chơi 'Ra lệnh cho robot'" },
    { title: "Vị trí, định hướng trong không gian (tiếp theo) (Tiết 2)", sub: "Làm quen với một số hình khối", period: 47 },
    { title: "Luyện tập chung", sub: "Làm quen với một số hình khối", period: 48 }
  ],
  17: [
    { title: "Ôn tập các số trong phạm vi 10 (Tiết 1)", sub: "Ôn tập học kì 1", period: 49 },
    { title: "Ôn tập các số trong phạm vi 10 (tiếp theo) (Tiết 2)", sub: "Ôn tập học kì 1", period: 50 },
    { title: "Ôn tập phép cộng, phép trừ trong phạm vi 10 (Tiết 1)", sub: "Ôn tập học kì 1", period: 51 }
  ],
  18: [
    { title: "Ôn tập phép cộng, phép trừ trong phạm vi 10 (tiếp theo) (Tiết 2)", sub: "Ôn tập học kì 1", period: 52 },
    { title: "Ôn tập hình học (Tiết 1)", sub: "Ôn tập học kì 1", period: 53 },
    { title: "Ôn tập chung (Tiết 1)", sub: "Ôn tập học kì 1", period: 54 }
  ],
  19: [
    { title: "Số có hai chữ số (Tiết 1)", sub: "Các số đến 100", period: 55 },
    { title: "Số có hai chữ số (Tiết 2)", sub: "Các số đến 100", period: 56 },
    { title: "Số có hai chữ số (Tiết 3)", sub: "Các số đến 100", period: 57 }
  ],
  20: [
    { title: "Số có hai chữ số (tiếp theo) (Tiết 4)", sub: "Các số đến 100", period: 58 },
    { title: "Số có hai chữ số (tiếp theo) (Tiết 5)", sub: "Các số đến 100", period: 59 },
    { title: "Số có hai chữ số (tiếp theo) (Tiết 6)", sub: "Các số đến 100", period: 60 }
  ],
  21: [
    { title: "So sánh số có hai chữ số (Tiết 1)", sub: "Các số đến 100", period: 61 },
    { title: "So sánh số có hai chữ số (Tiết 2)", sub: "Các số đến 100", period: 62 },
    { title: "So sánh số có hai chữ số (Tiết 3)", sub: "Các số đến 100", period: 63 }
  ],
  22: [
    { title: "Bảng các số từ 1 đến 100 (Tiết 1)", sub: "Các số đến 100", period: 64 },
    { title: "Bảng các số từ 1 đến 100 (Tiết 2)", sub: "Các số đến 100", period: 65 },
    { title: "Luyện tập chung (Tiết 1)", sub: "Độ dài và đo độ dài", period: 66 }
  ],
  23: [
    { title: "Luyện tập chung (Tiết 2)", sub: "Độ dài và đo độ dài", period: 67 },
    { title: "Dài hơn, ngắn hơn", sub: "Độ dài và đo độ dài", period: 68 },
    { title: "Đơn vị đo độ dài (Tiết 1)", sub: "Độ dài và đo độ dài", period: 69, integ: "NLS 1.2.CB1a: Mô tả các bước đo bằng thước như một quy trình rõ ràng; biết công cụ hỗ trợ hướng dẫn" }
  ],
  24: [
    { title: "Đơn vị đo độ dài (tiếp theo) (Tiết 2)", sub: "Độ dài và đo độ dài", period: 70 },
    { title: "Thực hành ước lượng và đo độ dài (Tiết 1)", sub: "Độ dài và đo độ dài", period: 71 },
    { title: "Thực hành ước lượng và đo độ dài (Tiết 2)", sub: "Độ dài và đo độ dài", period: 72 }
  ],
  25: [
    { title: "Luyện tập chung (Tiết 1)", sub: "Độ dài và đo độ dài", period: 73 },
    { title: "Luyện tập chung (Tiết 2)", sub: "Độ dài và đo độ dài", period: 74 },
    { title: "Phép cộng số có hai chữ số với số có một chữ số (Tiết 1)", sub: "Phép cộng trừ không nhớ trong phạm vi 100", period: 75 }
  ],
  26: [
    { title: "Phép cộng số có hai chữ số với số có một chữ số (tiếp theo) (Tiết 2)", sub: "Phép cộng trừ không nhớ trong phạm vi 100", period: 76 },
    { title: "Phép cộng số có hai chữ số với số có hai chữ số (Tiết 1)", sub: "Phép cộng trừ không nhớ trong phạm vi 100", period: 77 },
    { title: "Phép cộng số có hai chữ số với số có hai chữ số (tiếp theo) (Tiết 2)", sub: "Phép cộng trừ không nhớ trong phạm vi 100", period: 78 }
  ],
  27: [
    { title: "Phép trừ số có hai chữ số cho số có một chữ số (Tiết 1)", sub: "Phép cộng trừ không nhớ trong phạm vi 100", period: 79 },
    { title: "Phép trừ số có hai chữ số cho số có một chữ số (Tiết 2)", sub: "Phép cộng trừ không nhớ trong phạm vi 100", period: 80 },
    { title: "Phép trừ số có hai chữ số cho số có một chữ số (Tiết 3)", sub: "Phép cộng trừ không nhớ trong phạm vi 100", period: 81, integ: "Tích hợp AI: NLd: Rèn tư duy thuật toán đơn giản trong phép trừ theo hàng chục, hàng đơn vị. Trò chơi 'Robot tính sai, em sửa lại'" }
  ],
  28: [
    { title: "Phép trừ số có hai chữ số cho số có hai chữ số (tiếp theo) (Tiết 1)", sub: "Phép cộng trừ không nhớ trong phạm vi 100", period: 82 },
    { title: "Phép trừ số có hai chữ số cho số có hai chữ số (tiếp theo) (Tiết 2)", sub: "Phép cộng trừ không nhớ trong phạm vi 100", period: 83 },
    { title: "Phép trừ số có hai chữ số cho số có hai chữ số (tiếp theo) (Tiết 3)", sub: "Phép cộng trừ không nhớ trong phạm vi 100", period: 84 }
  ],
  29: [
    { title: "Luyện tập chung (Tiết 1)", sub: "Phép cộng trừ không nhớ trong phạm vi 100", period: 85 },
    { title: "Luyện tập chung (Tiết 2)", sub: "Phép cộng trừ không nhớ trong phạm vi 100", period: 86 },
    { title: "Luyện tập chung (Tiết 3)", sub: "Phép cộng trừ không nhớ trong phạm vi 100", period: 87 }
  ],
  30: [
    { title: "Luyện tập chung", sub: "Phép cộng trừ không nhớ trong phạm vi 100", period: 88 },
    { title: "Thay bằng Bài học STEM: Đồng hồ tiện ích (Tiết 1)", sub: "Thời gian. Giờ và lịch", period: 89, integ: "Bài học STEM: Đồng hồ tiện ích (Tiết 1) - Tác giả Tường Duy Hải" },
    { title: "Thay bằng Bài học STEM: Đồng hồ tiện ích (Tiết 2)", sub: "Thời gian. Giờ và lịch", period: 90, integ: "Bài học STEM: Đồng hồ tiện ích (Tiết 2) - Hoàn thiện đồng hồ xem giờ" }
  ],
  31: [
    { title: "Các ngày trong tuần (Tiết 1)", sub: "Thời gian. Giờ và lịch", period: 91, integ: "Tích hợp AI: NLa: Biết ứng dụng lịch/AI chỉ hỗ trợ nhắc việc, không thay thế việc ghi nhớ và thực hiện thời khóa biểu" },
    { title: "Các ngày trong tuần (Tiết 2)", sub: "Thời gian. Giờ và lịch", period: 92 },
    { title: "Thực hành xem lịch và giờ (Tiết 1)", sub: "Thời gian. Giờ và lịch", period: 93 }
  ],
  32: [
    { title: "Thực hành xem lịch và giờ (tiếp theo) (Tiết 2)", sub: "Thời gian. Giờ và lịch", period: 94 },
    { title: "Luyện tập chung (Tiết 1)", sub: "Thời gian. Giờ và lịch", period: 95 },
    { title: "Luyện tập chung (Tiết 2)", sub: "Thời gian. Giờ và lịch", period: 96 }
  ],
  33: [
    { title: "Ôn tập các số và phép tính trong phạm vi 10 (Tiết 1)", sub: "Ôn tập cuối năm", period: 97 },
    { title: "Ôn tập các số và phép tính trong phạm vi 10 (Tiết 2)", sub: "Ôn tập cuối năm", period: 98 },
    { title: "Ôn tập các số và phép tính trong phạm vi 10 (Tiết 3)", sub: "Ôn tập cuối năm", period: 99 }
  ],
  34: [
    { title: "Ôn tập các số và phép tính trong phạm vi 100 (Tiết 1)", sub: "Ôn tập cuối năm", period: 100 },
    { title: "Ôn tập các số và phép tính trong phạm vi 100 (Tiết 2)", sub: "Ôn tập cuối năm", period: 101 },
    { title: "Ôn tập các số và phép tính trong phạm vi 100 (Tiết 3)", sub: "Ôn tập cuối năm", period: 102 }
  ],
  35: [
    { title: "Ôn tập hình học và đo lường (Tiết 1)", sub: "Ôn tập cuối năm", period: 103 },
    { title: "Ôn tập hình học và đo lường (Tiết 2)", sub: "Ôn tập cuối năm", period: 104 },
    { title: "Ôn tập chung", sub: "Ôn tập cuối năm", period: 105 }
  ]
};

// 3. MÔN TỰ NHIÊN VÀ XÃ HỘI (2 tiết/tuần x 35 tuần = 70 tiết/năm, 6 chủ đề)
export const OFFICIAL_G1_TNXH: Record<number, Grade1SubjectItem[]> = {
  1: [
    { title: "Bài 1: Kể về gia đình (Tiết 1)", sub: "Chủ đề 1: Gia đình", period: 1 },
    { title: "Bài 1: Kể về gia đình (Tiết 2)", sub: "Chủ đề 1: Gia đình", period: 2 }
  ],
  2: [
    { title: "Bài 2: Ngôi nhà của em (Tiết 1)", sub: "Chủ đề 1: Gia đình", period: 3 },
    { title: "Bài 2: Ngôi nhà của em (Tiết 2)", sub: "Chủ đề 1: Gia đình", period: 4 }
  ],
  3: [
    { title: "Bài 3: Đồ dùng trong nhà (Tiết 1)", sub: "Chủ đề 1: Gia đình", period: 5 },
    { title: "Bài 3: Đồ dùng trong nhà (Tiết 2)", sub: "Chủ đề 1: Gia đình", period: 6 }
  ],
  4: [
    { title: "Bài 4: An toàn khi sử dụng đồ dùng trong nhà (Tiết 1)", sub: "Chủ đề 1: Gia đình", period: 7, integ: "NLS 4.1.CB1b: Phân biệt rủi ro và mối đe dọa đơn giản trong môi trường số | AI 1.2CB3a: Không dùng AI hại người khác; thiết bị thông minh cảnh báo nguy hiểm báo cháy rò điện" },
    { title: "Bài 4: An toàn khi sử dụng đồ dùng trong nhà (Tiết 2)", sub: "Chủ đề 1: Gia đình", period: 8, integ: "Tích hợp AI: Thiết bị thông minh trong nhà giúp cảnh báo nguy hiểm để bảo vệ con người" }
  ],
  5: [
    { title: "Ôn tập chủ đề Gia đình (Tiết 1)", sub: "Chủ đề 1: Gia đình", period: 9 },
    { title: "Ôn tập chủ đề Gia đình (Tiết 2)", sub: "Chủ đề 1: Gia đình", period: 10 }
  ],
  6: [
    { title: "Ôn tập chủ đề Gia đình (Tiết 3)", sub: "Chủ đề 1: Gia đình", period: 11 },
    { title: "Bài 5: Lớp học của em (Tiết 1)", sub: "Chủ đề 2: Trường học", period: 12, integ: "NLS 2.2.CB1a: Nhận biết công nghệ số đơn giản phù hợp chia sẻ dữ liệu, thông tin" }
  ],
  7: [
    { title: "Bài 5: Lớp học của em (Tiết 2)", sub: "Chủ đề 2: Trường học", period: 13 },
    { title: "Bài 5: Lớp học của em (Tiết 3)", sub: "Chủ đề 2: Trường học", period: 14 }
  ],
  8: [
    { title: "Bài 6: Cùng khám phá trường học (Tiết 1)", sub: "Chủ đề 2: Trường học", period: 15, integ: "Tích hợp AI: NLd: Nhận biết thiết bị AI có các bộ phận giống con người (camera là mắt, micro là tai)" },
    { title: "Bài 6: Cùng khám phá trường học (Tiết 2)", sub: "Chủ đề 2: Trường học", period: 16, integ: "Tích hợp AI: Camera là mắt, micro là tai của robot/thiết bị AI" }
  ],
  9: [
    { title: "Bài 6: Cùng khám phá trường học (Tiết 3)", sub: "Chủ đề 2: Trường học", period: 17 },
    { title: "Bài 7: Cùng vui ở trường (Tiết 1)", sub: "Chủ đề 2: Trường học", period: 18 }
  ],
  10: [
    { title: "Bài 7: Cùng vui ở trường (Tiết 2)", sub: "Chủ đề 2: Trường học", period: 19 },
    { title: "Ôn tập chủ đề: Trường học (Tiết 1)", sub: "Chủ đề 2: Trường học", period: 20 }
  ],
  11: [
    { title: "Ôn tập chủ đề: Trường học (Tiết 2)", sub: "Chủ đề 2: Trường học", period: 21 },
    { title: "Ôn tập chủ đề: Trường học (Tiết 3)", sub: "Chủ đề 2: Trường học", period: 22 }
  ],
  12: [
    { title: "Thay thế Bài học STEM: Bài 12: Dụng cụ vệ sinh nơi em sống / Trang trí cảnh quan (Tiết 1)", sub: "Chủ đề 3: Cộng đồng địa phương", period: 23, integ: "Bài học STEM: Trang trí cảnh quan nơi em sống / Dụng cụ vệ sinh nơi em sống (Tiết 1)" },
    { title: "Thay thế Bài học STEM: Bài 12: Dụng cụ vệ sinh nơi em sống / Trang trí cảnh quan (Tiết 2)", sub: "Chủ đề 3: Cộng đồng địa phương", period: 24, integ: "Bài học STEM: Trang trí cảnh quan nơi em sống (Tiết 2)" }
  ],
  13: [
    { title: "Bài 9: Con người nơi em sống (Tiết 1)", sub: "Chủ đề 3: Cộng đồng địa phương", period: 25 },
    { title: "Bài 9: Con người nơi em sống (Tiết 2)", sub: "Chủ đề 3: Cộng đồng địa phương", period: 26 }
  ],
  14: [
    { title: "Bài 10: Vui đón Tết (Tiết 1)", sub: "Chủ đề 3: Cộng đồng địa phương", period: 27 },
    { title: "Bài 10: Vui đón Tết (Tiết 2)", sub: "Chủ đề 3: Cộng đồng địa phương", period: 28 }
  ],
  15: [
    { title: "Bài 11: An toàn trên đường (Tiết 1)", sub: "Chủ đề 3: Cộng đồng địa phương", period: 29 },
    { title: "Bài 11: An toàn trên đường (Tiết 2)", sub: "Chủ đề 3: Cộng đồng địa phương", period: 30 }
  ],
  16: [
    { title: "Ôn tập chủ đề Cộng đồng địa phương (Tiết 1)", sub: "Chủ đề 3: Cộng đồng địa phương", period: 31 },
    { title: "Ôn tập chủ đề Cộng đồng địa phương (Tiết 2)", sub: "Chủ đề 3: Cộng đồng địa phương", period: 32 }
  ],
  17: [
    { title: "Ôn tập chủ đề Cộng đồng địa phương (Tiết 3)", sub: "Chủ đề 3: Cộng đồng địa phương", period: 33 },
    { title: "Bài 12: Cây xung quanh em (Tiết 1)", sub: "Chủ đề 4: Thực vật và động vật", period: 34 }
  ],
  18: [
    { title: "Bài 12: Cây xung quanh em (Tiết 2)", sub: "Chủ đề 4: Thực vật và động vật", period: 35 },
    { title: "Bài 12: Cây xung quanh em (Tiết 3)", sub: "Chủ đề 4: Thực vật và động vật", period: 36 }
  ],
  19: [
    { title: "Bài 13: Chăm sóc và bảo vệ cây trồng (Tiết 1)", sub: "Chủ đề 4: Thực vật và động vật", period: 37, integ: "NLS 1.1.CB1a: Tìm kiếm thông tin đơn giản trong môi trường số về cây có gai, có độc để lưu ý an toàn" },
    { title: "Bài 13: Chăm sóc và bảo vệ cây trồng (Tiết 2)", sub: "Chủ đề 4: Thực vật và động vật", period: 38, integ: "NLS 1.1.CB1a: Chọn lọc thông tin an toàn khi tiếp xúc với cây trồng" }
  ],
  20: [
    { title: "Bài 13: Chăm sóc và bảo vệ cây trồng (Tiết 3)", sub: "Chủ đề 4: Thực vật và động vật", period: 39 },
    { title: "Bài 14: Con vật quanh em (Tiết 1)", sub: "Chủ đề 4: Thực vật và động vật", period: 40 }
  ],
  21: [
    { title: "Bài 14: Con vật quanh em (Tiết 2)", sub: "Chủ đề 4: Thực vật và động vật", period: 41 },
    { title: "Bài 14: Con vật quanh em (Tiết 3)", sub: "Chủ đề 4: Thực vật và động vật", period: 42 }
  ],
  22: [
    { title: "Bài 15: Chăm sóc và bảo vệ vật nuôi (Tiết 1)", sub: "Chủ đề 4: Thực vật và động vật", period: 43 },
    { title: "Bài 15: Chăm sóc và bảo vệ vật nuôi (Tiết 2)", sub: "Chủ đề 4: Thực vật và động vật", period: 44 }
  ],
  23: [
    { title: "Ôn tập chủ đề Thực vật và Động vật (Tiết 1)", sub: "Chủ đề 4: Thực vật và động vật", period: 45 },
    { title: "Ôn tập chủ đề Thực vật và Động vật (Tiết 2)", sub: "Chủ đề 4: Thực vật và động vật", period: 46 }
  ],
  24: [
    { title: "Ôn tập chủ đề Thực vật và Động vật (Tiết 3)", sub: "Chủ đề 4: Thực vật và động vật", period: 47 },
    { title: "Bài 16: Cơ thể em (Tiết 1)", sub: "Chủ đề 5: Con người và sức khoẻ", period: 48 }
  ],
  25: [
    { title: "Bài 16: Cơ thể em (Tiết 2)", sub: "Chủ đề 5: Con người và sức khoẻ", period: 49 },
    { title: "Bài 16: Cơ thể em (Tiết 3)", sub: "Chủ đề 5: Con người và sức khoẻ", period: 50 }
  ],
  26: [
    { title: "Bài 17: Các giác quan của cơ thể (Tiết 1)", sub: "Chủ đề 5: Con người và sức khoẻ", period: 51 },
    { title: "Bài 17: Các giác quan của cơ thể (Tiết 2)", sub: "Chủ đề 5: Con người và sức khoẻ", period: 52 }
  ],
  27: [
    { title: "Bài 17: Các giác quan của cơ thể (Tiết 3)", sub: "Chủ đề 5: Con người và sức khoẻ", period: 53 },
    { title: "Bài 18: Ăn uống hằng ngày (Tiết 1)", sub: "Chủ đề 5: Con người và sức khoẻ", period: 54 }
  ],
  28: [
    { title: "Bài 18: Ăn uống hằng ngày (Tiết 2)", sub: "Chủ đề 5: Con người và sức khoẻ", period: 55 },
    { title: "Bài 19: Vận động và nghỉ ngơi (Tiết 1)", sub: "Chủ đề 5: Con người và sức khoẻ", period: 56 }
  ],
  29: [
    { title: "Bài 19: Vận động và nghỉ ngơi (Tiết 2)", sub: "Chủ đề 5: Con người và sức khoẻ", period: 57 },
    { title: "Bài 20: Tự bảo vệ mình (Tiết 1)", sub: "Chủ đề 5: Con người và sức khoẻ", period: 58 }
  ],
  30: [
    { title: "Bài 20: Tự bảo vệ mình (Tiết 2)", sub: "Chủ đề 5: Con người và sức khoẻ", period: 59 },
    { title: "Ôn tập chủ đề: Con người và sức khỏe (Tiết 1)", sub: "Chủ đề 5: Con người và sức khoẻ", period: 60 }
  ],
  31: [
    { title: "Ôn tập chủ đề: Con người và sức khỏe (Tiết 2)", sub: "Chủ đề 5: Con người và sức khoẻ", period: 61 },
    { title: "Ôn tập chủ đề: Con người và sức khỏe (Tiết 3)", sub: "Chủ đề 5: Con người và sức khoẻ", period: 62 }
  ],
  32: [
    { title: "Thay thế Bài học STEM: Bài 15: Bầu trời ngày và đêm (Tiết 1)", sub: "Chủ đề 6: Trái Đất và bầu trời", period: 63, integ: "Bài học STEM: Bài 15: Bầu trời ngày và đêm (Tiết 1) - Tác giả Tường Duy Hải" },
    { title: "Thay thế Bài học STEM: Bài 15: Bầu trời ngày và đêm (Tiết 2)", sub: "Chủ đề 6: Trái Đất và bầu trời", period: 64, integ: "Bài học STEM: Bài 15: Bầu trời ngày và đêm (Tiết 2) - Khám phá mặt trời mặt trăng" }
  ],
  33: [
    { title: "Thay thế Bài học STEM: Bài 15: Bầu trời ngày và đêm (Tiết 3)", sub: "Chủ đề 6: Trái Đất và bầu trời", period: 65, integ: "Bài học STEM: Bài 15: Bầu trời ngày và đêm (Tiết 3) - Hoàn thiện mô hình bầu trời" },
    { title: "Bài 22: Thời tiết luôn thay đổi (Tiết 1)", sub: "Chủ đề 6: Trái Đất và bầu trời", period: 66 }
  ],
  34: [
    { title: "Bài 22: Thời tiết luôn thay đổi (Tiết 2)", sub: "Chủ đề 6: Trái Đất và bầu trời", period: 67, integ: "NLS 4.1.CB1b: Nhận biết cách bảo vệ thiết bị và nội dung đơn giản để ứng phó rủi ro trong môi trường số" },
    { title: "Bài 22: Thời tiết luôn thay đổi (Tiết 3)", sub: "Chủ đề 6: Trái Đất và bầu trời", period: 68, integ: "NLS 4.1.CB1b: Bảo vệ thiết bị điện tử khi trời mưa giông sét" }
  ],
  35: [
    { title: "Ôn tập chủ đề Trái Đất và bầu trời (Tiết 1)", sub: "Chủ đề 6: Trái Đất và bầu trời", period: 69 },
    { title: "Ôn tập chủ đề Trái Đất và bầu trời (Tiết 2)", sub: "Chủ đề 6: Trái Đất và bầu trời", period: 70 }
  ]
};

// 4. MÔN ĐẠO ĐỨC (1 tiết/tuần x 35 tuần = 35 tiết/năm)
export const OFFICIAL_G1_DAO_DUC: Record<number, Grade1SubjectItem> = {
  1: { title: "Em giữ sạch đôi tay", sub: "Tự chăm sóc bản thân", period: 1 },
  2: { title: "Em giữ sạch răng miệng", sub: "Tự chăm sóc bản thân", period: 2 },
  3: { title: "Em tắm, gội sạch sẽ", sub: "Tự chăm sóc bản thân", period: 3 },
  4: { title: "Em giữ trang phục gọn gàng, sạch sẽ", sub: "Tự chăm sóc bản thân", period: 4 },
  5: { title: "Gia đình của em", sub: "Yêu thương gia đình", period: 5 },
  6: { title: "Lễ phép, vâng lời ông bà, cha mẹ, anh chị", sub: "Quan tâm, chăm sóc người thân trong gia đình", period: 6 },
  7: { title: "Quan tâm, chăm sóc ông bà", sub: "Quan tâm, chăm sóc người thân trong gia đình", period: 7 },
  8: { title: "Quan tâm, chăm sóc cha mẹ", sub: "Quan tâm, chăm sóc người thân trong gia đình", period: 8 },
  9: { title: "Chăm sóc, giúp đỡ em nhỏ", sub: "Quan tâm, chăm sóc người thân trong gia đình", period: 9 },
  10: { title: "Thực hành kĩ năng giữa kì 1", sub: "Thực hành kĩ năng", period: 10 },
  11: { title: "Đi học đúng giờ", sub: "Thực hiện nội quy trường lớp", period: 11, integ: "Tích hợp AI: NLb: Nhận biết đồng hồ thông minh hoặc trợ lý ảo có thể nhắc giờ đến lớp, từ đó hình thành thói quen đi học đúng giờ" },
  12: { title: "Học bài và làm bài đầy đủ", sub: "Thực hiện nội quy trường lớp", period: 12 },
  13: { title: "Giữ trật tự trong trường, lớp", sub: "Thực hiện nội quy trường lớp", period: 13 },
  14: { title: "Giữ gìn tài sản của trường, lớp", sub: "Thực hiện nội quy trường lớp", period: 14 },
  15: { title: "Giữ gìn vệ sinh trường, lớp", sub: "Thực hiện nội quy trường lớp", period: 15 },
  16: { title: "Gọn gàng, ngăn nắp", sub: "Sinh hoạt nền nếp", period: 16, integ: "NLS 2.1.CB1a, 1.2.CB1a: Quan sát tranh qua thiết bị số để tương tác, đánh giá nguyên nhân đi học muộn" },
  17: { title: "Học tập, sinh hoạt đúng giờ", sub: "Sinh hoạt nền nếp", period: 17, integ: "NLS 5.2.CB1a: Sử dụng công cụ số đơn giản dưới sự hướng dẫn của người lớn để trình bày thời gian biểu học tập" },
  18: { title: "Ôn tập - đánh giá học kì 1", sub: "Ôn tập - đánh giá", period: 18 },
  19: { title: "Tự giác học tập", sub: "Tự giác làm việc của mình", period: 19, integ: "NLS 1.1.CB1a: Xác định thông tin, tìm kiếm dữ liệu nội dung qua tìm kiếm đơn giản trong môi trường số" },
  20: { title: "Tự giác tham gia các hoạt động ở trường", sub: "Tự giác làm việc của mình", period: 20 },
  21: { title: "Tự giác làm việc nhà", sub: "Tự giác làm việc của mình", period: 21 },
  22: { title: "Không nói dối", sub: "Thật thà", period: 22, integ: "NLS 2.3.CB1a: Giao tiếp trung thực, không gửi thông tin sai sự thật trong nhóm học tập/lớp trực tuyến" },
  23: { title: "Không tự ý lấy và sử dụng đồ của người khác", sub: "Thật thà", period: 23, integ: "NLS 2.2.CB1a: Nhận biết chia sẻ dữ liệu phù hợp, ứng xử có trách nhiệm trong môi trường số" },
  24: { title: "Nhặt được của rơi trả người đánh mất", sub: "Thật thà", period: 24 },
  25: { title: "Biết nhận lỗi", sub: "Thật thà", period: 25 },
  26: { title: "Thực hành kĩ năng giữa kì 2", sub: "Thực hành kĩ năng", period: 26 },
  27: { title: "Phòng, tránh tai nạn giao thông", sub: "Phòng, tránh tai nạn, thương tích", period: 27 },
  28: { title: "Phòng, tránh đuối nước", sub: "Phòng, tránh tai nạn, thương tích", period: 28 },
  29: { title: "Phòng, tránh bỏng", sub: "Phòng, tránh tai nạn, thương tích", period: 29 },
  30: { title: "Phòng, tránh thương tích do ngã", sub: "Phòng, tránh tai nạn, thương tích", period: 30 },
  31: { title: "Phòng, tránh điện giật", sub: "Phòng, tránh tai nạn, thương tích", period: 31, integ: "NLS 4.1.CB1b: Phân biệt rủi ro khi dùng thiết bị điện/số (ổ cắm hở, dây sạc hỏng, tay ướt) và báo người lớn" },
  32: { title: "Phòng, tránh ngộ độc thực phẩm", sub: "Phòng, tránh tai nạn, thương tích", period: 32, integ: "NLS 4.1.CB1b: Phân biệt rủi ro từ hình ảnh, video quảng cáo đồ ăn không rõ nguồn gốc trong môi trường số" },
  33: { title: "Phòng, tránh xâm hại", sub: "Phòng, tránh tai nạn, thương tích", period: 33, integ: "NLS 4.1.CB1b: Không trả lời, không gửi ảnh riêng tư khi người lạ nhắn tin/video call và báo ngay người lớn tin cậy" },
  34: { title: "Ôn tập đánh giá cuối năm (Tiết 1)", sub: "Ôn tập đánh giá", period: 34 },
  35: { title: "Ôn tập đánh giá cuối năm (Tiết 2)", sub: "Ôn tập đánh giá", period: 35 }
};

// 5. MÔN HOẠT ĐỘNG TRẢI NGHIỆM (3 tiết/tuần x 35 tuần = 105 tiết/năm, 9 chủ đề)
// Tiết 1: Sinh hoạt dưới cờ (35 tiết) | Tiết 2: HĐTN theo chủ đề (35 tiết) | Tiết 3: Sinh hoạt lớp/Sao (35 tiết)
export const OFFICIAL_G1_HDTN: Record<number, Grade1SubjectItem[]> = {
  1: [
    { title: "Sinh hoạt dưới cờ: Lễ Khai giảng", sub: "Sinh hoạt dưới cờ", period: 1 },
    { title: "Bài 1: Làm quen với bạn mới", sub: "Chào năm học mới", period: 2 },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 3 }
  ],
  2: [
    { title: "Sinh hoạt dưới cờ: Tìm hiểu nội quy nhà trường", sub: "Sinh hoạt dưới cờ", period: 4 },
    { title: "Bài 2: Những việc nên làm trong giờ học, giờ chơi (Tiết 1)", sub: "Chào năm học mới", period: 5 },
    { title: "Sinh hoạt sao: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt sao", period: 6 }
  ],
  3: [
    { title: "Sinh hoạt dưới cờ: Nói lời hay - làm việc tốt", sub: "Sinh hoạt dưới cờ", period: 7 },
    { title: "Bài 2: Những việc nên làm trong giờ học, giờ chơi (Tiết 2)", sub: "Chào năm học mới", period: 8 },
    { title: "Sinh hoạt lớp: Làm quen với sinh hoạt Sao Nhi đồng", sub: "Sinh hoạt lớp", period: 9 }
  ],
  4: [
    { title: "Sinh hoạt dưới cờ: Vui trung thu", sub: "Sinh hoạt dưới cờ", period: 10 },
    { title: "Bài 2: Những việc nên làm trong giờ học, giờ chơi (Tiết 3)", sub: "Chào năm học mới", period: 11 },
    { title: "Sinh hoạt lớp: Vui trung thu", sub: "Sinh hoạt lớp", period: 12 }
  ],
  5: [
    { title: "Sinh hoạt dưới cờ: Sao Nhi đồng chăm ngoan", sub: "Sinh hoạt dưới cờ", period: 13 },
    { title: "Bài 3: Cảm xúc của em", sub: "Em biết yêu thương", period: 14 },
    { title: "Sinh hoạt lớp: Sơ kết tuần", sub: "Sinh hoạt lớp", period: 15 }
  ],
  6: [
    { title: "Sinh hoạt dưới cờ: Hoạt động nhân đạo", sub: "Sinh hoạt dưới cờ", period: 16 },
    { title: "Bài 4: Yêu thương con người (Tiết 1)", sub: "Em biết yêu thương", period: 17 },
    { title: "Sinh hoạt sao: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt sao", period: 18 }
  ],
  7: [
    { title: "Sinh hoạt dưới cờ: Thử làm ca sĩ chào mừng ngày Phụ nữ Việt Nam 20-10", sub: "Sinh hoạt dưới cờ", period: 19 },
    { title: "Bài 4: Yêu thương con người (Tiết 2)", sub: "Em biết yêu thương", period: 20 },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 21 }
  ],
  8: [
    { title: "Sinh hoạt dưới cờ: Tuyên dương tấm gương Nhi đồng chăm ngoan", sub: "Sinh hoạt dưới cờ", period: 22 },
    { title: "Bài 4: Yêu thương con người (Tiết 3)", sub: "Em biết yêu thương", period: 23 },
    { title: "Sinh hoạt sao: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt sao", period: 24 }
  ],
  9: [
    { title: "Sinh hoạt dưới cờ: Tìm hiểu truyền thống nhà trường", sub: "Sinh hoạt dưới cờ", period: 25 },
    { title: "Bài 5: Thân thiện với bạn bè", sub: "Em biết yêu thương", period: 26 },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 27 }
  ],
  10: [
    { title: "Sinh hoạt dưới cờ: Lễ Phát động thi đua thực hiện Năm điều Bác Hồ dạy", sub: "Sinh hoạt dưới cờ", period: 28 },
    { title: "Bài 6: Thực hiện Năm điều Bác Hồ dạy", sub: "Em biết yêu thương", period: 29 },
    { title: "Sinh hoạt sao: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt sao", period: 30 }
  ],
  11: [
    { title: "Sinh hoạt dưới cờ: Chào mừng ngày Nhà giáo Việt Nam 20-11", sub: "Sinh hoạt dưới cờ", period: 31 },
    { title: "Bài 7: Kính yêu thầy cô (Tiết 1)", sub: "Truyền thống trường em", period: 32 },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 33 }
  ],
  12: [
    { title: "Sinh hoạt dưới cờ: Trưng bày và giới thiệu sản phẩm ở 'Góc tri ân' thầy cô", sub: "Sinh hoạt dưới cờ", period: 34 },
    { title: "Bài 7: Kính yêu thầy cô (Tiết 2)", sub: "Truyền thống trường em", period: 35 },
    { title: "Sinh hoạt sao: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt sao", period: 36 }
  ],
  13: [
    { title: "Sinh hoạt dưới cờ: Tìm hiểu về quyền và bổn phận của trẻ em", sub: "Sinh hoạt dưới cờ", period: 37 },
    { title: "Bài 8: An toàn khi vui chơi (Tiết 1)", sub: "An toàn cho em", period: 38 },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 39 }
  ],
  14: [
    { title: "Sinh hoạt dưới cờ: Chào mừng ngày thành lập QĐND Việt Nam 22-12", sub: "Sinh hoạt dưới cờ", period: 40 },
    { title: "Bài 8: An toàn khi vui chơi (Tiết 2)", sub: "An toàn cho em", period: 41 },
    { title: "Sinh hoạt sao: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt sao", period: 42 }
  ],
  15: [
    { title: "Sinh hoạt dưới cờ: Diễn đàn phòng chống bạo lực học đường", sub: "Sinh hoạt dưới cờ", period: 43 },
    { title: "Bài 9: Phòng tránh bị bắt nạt", sub: "An toàn cho em", period: 44, integ: "NLS 4.1.CB1b: Nhận biết bị trêu chọc, đe dọa qua thiết bị số là không an toàn, biết lưu lại và báo người lớn | Quyền con người: Quyền được bảo vệ" },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 45 }
  ],
  16: [
    { title: "Sinh hoạt dưới cờ: An toàn cho nụ cười trẻ thơ", sub: "Sinh hoạt dưới cờ", period: 46 },
    { title: "Bài 10: Sử dụng đồ dùng an toàn trong gia đình", sub: "An toàn cho em", period: 47 },
    { title: "Sinh hoạt sao: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt sao", period: 48 }
  ],
  17: [
    { title: "Sinh hoạt dưới cờ: Giao lưu 'Nét đẹp tuổi thơ'", sub: "Sinh hoạt dưới cờ", period: 49 },
    { title: "Bài 11: Chân dung của em", sub: "Em quý trọng bản thân", period: 50, integ: "NLS 4.2.CB1a: Không tự ý chia sẻ hình ảnh chân dung, tên đầy đủ, địa chỉ, số điện thoại cho người lạ trên môi trường số" },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 51 }
  ],
  18: [
    { title: "Sinh hoạt dưới cờ: Ngày hội vì sức khỏe học đường", sub: "Sinh hoạt dưới cờ", period: 52 },
    { title: "Bài 12: Giữ vệ sinh cá nhân", sub: "Em quý trọng bản thân", period: 53 },
    { title: "Sinh hoạt sao: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt sao", period: 54 }
  ],
  19: [
    { title: "Sinh hoạt dưới cờ: Vệ sinh an toàn thực phẩm", sub: "Sinh hoạt dưới cờ", period: 55 },
    { title: "Bài 13: Ăn uống hợp lí", sub: "Em quý trọng bản thân", period: 56, integ: "NLS 1.1.CB1a: Tìm thông tin đơn giản về cảnh đẹp quê hương qua hình ảnh/video theo từ khóa ngắn" },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 57 }
  ],
  20: [
    { title: "Sinh hoạt dưới cờ: Ngày hội trình diễn thời trang", sub: "Sinh hoạt dưới cờ", period: 58 },
    { title: "Bài 14: Sử dụng trang phục hằng ngày", sub: "Em quý trọng bản thân", period: 59 },
    { title: "Sinh hoạt sao: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt sao", period: 60 }
  ],
  21: [
    { title: "Sinh hoạt dưới cờ: Ủng hộ 'Tết yêu thương'", sub: "Sinh hoạt dưới cờ", period: 61 },
    { title: "Bài 15: Sắp xếp nhà cửa gọn gàng đón Tết (Tiết 1)", sub: "Vui đón mùa xuân", period: 62 },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 63 }
  ],
  22: [
    { title: "Sinh hoạt dưới cờ: Hội chợ xuân", sub: "Sinh hoạt dưới cờ", period: 64 },
    { title: "Bài 15: Sắp xếp nhà cửa gọn gàng đón Tết (Tiết 2)", sub: "Vui đón mùa xuân", period: 65 },
    { title: "Sinh hoạt sao: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt sao", period: 66 }
  ],
  23: [
    { title: "Sinh hoạt dưới cờ: Giao lưu 'Đón Tết cổ truyền dân tộc'", sub: "Sinh hoạt dưới cờ", period: 67 },
    { title: "Bài 16: Ứng xử khi được nhận quà ngày Tết (Tiết 1)", sub: "Vui đón mùa xuân", period: 68 },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 69 }
  ],
  24: [
    { title: "Sinh hoạt dưới cờ: Vui chơi ngày Tết", sub: "Sinh hoạt dưới cờ", period: 70 },
    { title: "Bài 16: Ứng xử khi được nhận quà ngày Tết (Tiết 2)", sub: "Vui đón mùa xuân", period: 71 },
    { title: "Sinh hoạt sao: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt sao", period: 72 }
  ],
  25: [
    { title: "Sinh hoạt dưới cờ: Trò chơi sinh hoạt cộng đồng", sub: "Sinh hoạt dưới cờ", period: 73 },
    { title: "Bài 17: Hàng xóm nhà em (Tiết 1)", sub: "Tham gia hoạt động cộng đồng", period: 74 },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 75 }
  ],
  26: [
    { title: "Sinh hoạt dưới cờ: Chào mừng ngày Quốc tế Phụ nữ 8-3", sub: "Sinh hoạt dưới cờ", period: 76 },
    { title: "Bài 17: Hàng xóm nhà em (Tiết 2)", sub: "Tham gia hoạt động cộng đồng", period: 77 },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 78 }
  ],
  27: [
    { title: "Sinh hoạt dưới cờ: Em làm kế hoạch nhỏ", sub: "Sinh hoạt dưới cờ", period: 79 },
    { title: "Bài 18: Em tham gia các hoạt động xã hội (Tiết 1)", sub: "Tham gia hoạt động cộng đồng", period: 80 },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 81 }
  ],
  28: [
    { title: "Sinh hoạt dưới cờ: Lễ phát động phong trào Tuổi nhỏ làm việc nhỏ 'Nuôi heo đất - Giúp bạn đến trường'", sub: "Sinh hoạt dưới cờ", period: 82 },
    { title: "Bài 18: Em tham gia các hoạt động xã hội (Tiết 2)", sub: "Tham gia hoạt động cộng đồng", period: 83 },
    { title: "Sinh hoạt sao: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt sao", period: 84 }
  ],
  29: [
    { title: "Sinh hoạt dưới cờ: Chăm sóc vườn cây nhà trường", sub: "Sinh hoạt dưới cờ", period: 85 },
    { title: "Bài 19: Thiên nhiên tươi đẹp quê em (Tiết 1)", sub: "Quê hương tươi đẹp", period: 86, integ: "NLS 4.1.CB2.a: Xác định thông tin cần tìm về tên cảnh đẹp, đặc điểm nổi bật" },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 87 }
  ],
  30: [
    { title: "Sinh hoạt dưới cờ: Em tập làm hướng dẫn viên du lịch", sub: "Sinh hoạt dưới cờ", period: 88 },
    { title: "Bài 19: Thiên nhiên tươi đẹp quê em (Tiết 2)", sub: "Quê hương tươi đẹp", period: 89, integ: "NLS 4.1.L1-L2.a: Xác định cách tạo/chỉnh sửa nội dung số đơn giản | Giáo dục BVMT: Yêu quý và bảo vệ thiên nhiên" },
    { title: "Sinh hoạt sao: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt sao", period: 90 }
  ],
  31: [
    { title: "Sinh hoạt dưới cờ: Hát ca ngợi cảnh đẹp quê hương", sub: "Sinh hoạt dưới cờ", period: 91 },
    { title: "Bài 20: Em bảo vệ cảnh quan thiên nhiên (Tiết 1)", sub: "Quê hương tươi đẹp", period: 92 },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 93 }
  ],
  32: [
    { title: "Sinh hoạt dưới cờ: Ngày hội sách trường em", sub: "Sinh hoạt dưới cờ", period: 94 },
    { title: "Bài 20: Em bảo vệ cảnh quan thiên nhiên (Tiết 2)", sub: "Quê hương tươi đẹp", period: 95, integ: "NLS 3.1.CB1a: Lựa chọn ảnh/biểu tượng phù hợp để tạo thông điệp ngắn nhắc bạn bảo vệ cảnh quan thiên nhiên" },
    { title: "Sinh hoạt sao: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt sao", period: 96 }
  ],
  33: [
    { title: "Sinh hoạt dưới cờ: Thân thiện với môi trường", sub: "Sinh hoạt dưới cờ", period: 97 },
    { title: "Bài 21: Giữ gìn môi trường sạch, đẹp (Tiết 1)", sub: "Em bảo vệ môi trường", period: 98 },
    { title: "Sinh hoạt lớp: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt lớp", period: 99 }
  ],
  34: [
    { title: "Sinh hoạt dưới cờ: Mừng Sinh nhật Bác Hồ, mừng Đội ta trưởng thành", sub: "Sinh hoạt dưới cờ", period: 100 },
    { title: "Bài 21: Giữ gìn môi trường sạch, đẹp (Tiết 2)", sub: "Em bảo vệ môi trường", period: 101 },
    { title: "Sinh hoạt sao: Sơ kết tuần, lập kế hoạch tuần tới", sub: "Sinh hoạt sao", period: 102 }
  ],
  35: [
    { title: "Sinh hoạt dưới cờ: Lễ Tổng kết năm học", sub: "Sinh hoạt dưới cờ", period: 103 },
    { title: "Bài 21: Giữ gìn môi trường sạch, đẹp (Tiết 3)", sub: "Em bảo vệ môi trường", period: 104 },
    { title: "Sinh hoạt lớp: Tổng kết năm học", sub: "Sinh hoạt lớp", period: 105 }
  ]
};
