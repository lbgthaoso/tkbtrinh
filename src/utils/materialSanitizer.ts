/**
 * Utility to sanitize and format Teaching Aids & Materials (Đồ dùng dạy học và học liệu)
 * Strictly adheres to CV 2345/BGDĐT and Primary School Inspection Standards:
 * - Học sinh: KHÔNG ghi các đồ dùng hiển nhiên / mặc định (SGK, vở bài tập, vở ghi, bảng con, phấn, bút dạ, nháp, thước kẻ...)
 *             CHỈ ghi những vật liệu, học liệu hoặc đồ dùng thật sự cần thiết phục vụ trực tiếp cho bài học đó.
 * - Giáo viên: KHÔNG ghi chung chung (SGK, SGV, thước kẻ, phấn màu, bảng lớp...)
 *              CHỈ ghi thiết bị, học liệu số, mô hình, tranh ảnh, video clip, phiếu học tập và nội dung cần thiết theo đặc thù từng môn.
 */

export interface CleanMaterialsResult {
  teacher: string[];
  student: string[];
}

/**
 * Filter out prohibited default phrases from raw material text
 */
function removeProhibitedPhrases(text: string, isStudent: boolean): string {
  if (!text) return "";
  let clean = text;

  if (isStudent) {
    // Prohibited student phrases
    clean = clean.replace(/sách\s+giáo\s+khoa[^\,\;\.]*/gi, "");
    clean = clean.replace(/sách\s+học\s+sinh[^\,\;\.]*/gi, "");
    clean = clean.replace(/\bsgk\b[^\,\;\.]*/gi, "");
    clean = clean.replace(/vở\s+bài\s+tập[^\,\;\.]*/gi, "");
    clean = clean.replace(/vở\s+thực\s+hành[^\,\;\.]*/gi, "");
    clean = clean.replace(/vở\s+tập\s+viết[^\,\;\.]*/gi, "");
    clean = clean.replace(/vở\s+rèn\s+chữ[^\,\;\.]*/gi, "");
    clean = clean.replace(/vở\s+ghi(\s+bài)?[^\,\;\.]*/gi, "");
    clean = clean.replace(/vở\s+viết[^\,\;\.]*/gi, "");
    clean = clean.replace(/\bvở\s+toán\b[^\,\;\.]*/gi, "");
    clean = clean.replace(/\bvbt\b[^\,\;\.]*/gi, "");
    clean = clean.replace(/bộ\s+đồ\s+dùng\s+học\s+toán(\s+học\s+sinh|\s+\d+)?[^\,\;\.]*/gi, "");
    clean = clean.replace(/bộ\s+đồ\s+dùng\s+học\s+tiếng\s+việt[^\,\;\.]*/gi, "");
    clean = clean.replace(/bộ\s+đồ\s+dùng[^\,\;\.]*/gi, "");
    clean = clean.replace(/đồ\s+dùng\s+học\s+toán(\s+thực\s+hành)?[^\,\;\.]*/gi, "");
    clean = clean.replace(/bảng\s+con[^\,\;\.]*/gi, "");
    clean = clean.replace(/bảng\s+nhóm[^\,\;\.]*/gi, "phiếu học tập nhóm");
    clean = clean.replace(/khăn\s+lau(\s+bảng)?(\s+ẩm)?[^\,\;\.]*/gi, "");
    clean = clean.replace(/phấn\s*\/\s*bút\s+dạ/gi, "");
    clean = clean.replace(/phấn\s+(và|hoặc)?\s*bút\s+dạ/gi, "");
    clean = clean.replace(/phấn\s+trắng/gi, "");
    clean = clean.replace(/phấn\s+viết/gi, "");
    clean = clean.replace(/\bphấn\b/gi, "");
    clean = clean.replace(/bút\s+dạ(\s+màu)?/gi, "");
    clean = clean.replace(/bút\s+viết\s+bảng/gi, "");
    clean = clean.replace(/giấy\s+nháp/gi, "");
    clean = clean.replace(/\bnháp\b/gi, "");
    clean = clean.replace(/bút\s+mực/gi, "");
    clean = clean.replace(/bút\s+chì(,\s*tẩy)?/gi, "");
    clean = clean.replace(/tẩy\s+gôm/gi, "");
    clean = clean.replace(/đồ\s+dùng\s+học\s+tập(\s+cá\s+nhân)?/gi, "");
    clean = clean.replace(/dụng\s+cụ\s+học\s+tập/gi, "");
    clean = clean.replace(/sách\s*(\/|\s+và\s+)?vở\s+bài\s+tập[^\,\;\.]*/gi, "");
    clean = clean.replace(/sách\s+truyện\s+mang\s+theo/gi, "sách/truyện đọc theo chủ điểm");
  } else {
    // Prohibited teacher phrases
    clean = clean.replace(/kế\s+hoạch\s+bài\s+dạy[^\,\;\.]*/gi, "");
    clean = clean.replace(/giáo\s+án[^\,\;\.]*/gi, "");
    clean = clean.replace(/sách\s+giáo\s+khoa[^\,\;\.]*/gi, "");
    clean = clean.replace(/sách\s+giáo\s+viên[^\,\;\.]*/gi, "");
    clean = clean.replace(/\bsgk\b[^\,\;\.]*/gi, "");
    clean = clean.replace(/\bsgv\b[^\,\;\.]*/gi, "");
    clean = clean.replace(/thước\s+kẻ,\s*phấn\s+màu/gi, "");
    clean = clean.replace(/phấn\s+màu/gi, "");
    clean = clean.replace(/\bphấn\b/gi, "");
    clean = clean.replace(/bảng\s+lớp/gi, "");
  }

  // Clean trailing/leading punctuation and extra separators
  clean = clean
    .replace(/^[\s\,\;\.\-]+/, "")
    .replace(/[\s\,\;\.\-]+$/, "")
    .replace(/[\,\;]\s*[\,\;]/g, "; ")
    .replace(/\s{2,}/g, " ")
    .trim();

  return clean;
}

/**
 * Subject-specific realistic and necessary student preparation
 */
export function getDefaultStudentMaterials(subject: string, grade: number, lessonTitle: string = ""): string[] {
  const subLower = (subject || "").toLowerCase().trim();
  const titleLower = (lessonTitle || "").toLowerCase().trim();

  // 1. TOÁN
  if (subLower.includes("toán") || subLower === "t" || subLower.includes("tct")) {
    const isGeometry = 
      titleLower.includes("hình") || 
      titleLower.includes("góc") || 
      titleLower.includes("chu vi") || 
      titleLower.includes("diện tích") || 
      titleLower.includes("đo") || 
      titleLower.includes("tam giác") || 
      titleLower.includes("tứ giác") || 
      titleLower.includes("tròn") || 
      titleLower.includes("ê-ke") || 
      titleLower.includes("compa");

    if (isGeometry) {
      return ["Ê-ke, thước kẻ có vạch chia cm, compa (nếu vẽ hình tròn), phiếu học tập nhóm."];
    }
    if (grade === 1 || grade === 2) {
      return ["Bộ que tính hoặc khối lập phương thực hành, thẻ số và dấu phép tính, phiếu học tập."];
    }
    return ["Phiếu học tập cá nhân/nhóm, thẻ số/thẻ phân số thực hành phục vụ bài học."];
  }

  // 2. TIẾNG VIỆT
  if (subLower.includes("tiếng việt") || subLower === "tv" || subLower.includes("tctv")) {
    return ["Phiếu học tập nhóm, thẻ từ ngữ/thẻ câu, tranh ảnh hoặc tư liệu sưu tầm liên quan chủ điểm bài học."];
  }

  // 3. TỰ NHIÊN VÀ XÃ HỘI
  if (subLower.includes("tự nhiên") || subLower.includes("tnxh")) {
    return ["Phiếu quan sát/học tập, mẫu vật thật (lá cây, hoa, quả...) hoặc tranh ảnh thực tế sưu tầm theo yêu cầu bài học."];
  }

  // 4. KHOA HỌC
  if (subLower.includes("khoa học") || subLower === "kh") {
    return ["Phiếu ghi chép thí nghiệm, mẫu vật hoặc vật liệu quan sát đơn giản theo hướng dẫn của giáo viên."];
  }

  // 5. LỊCH SỬ VÀ ĐỊA LÍ
  if (subLower.includes("lịch sử") || subLower.includes("địa lí") || subLower.includes("ls&đl") || subLower.includes("ls-đl")) {
    return ["Lược đồ/bản đồ học tập, phiếu tìm hiểu kiến thức, tư liệu lịch sử - địa lí sưu tầm."];
  }

  // 6. ĐẠO ĐỨC
  if (subLower.includes("đạo đức") || subLower === "đđ") {
    return ["Thẻ bày tỏ ý kiến (mặt cười / mặt mếu hoặc thẻ xanh / đỏ), phiếu xử lý tình huống đạo đức."];
  }

  // 7. HOẠT ĐỘNG TRẢI NGHIỆM
  if (subLower.includes("trải nghiệm") || subLower.includes("hđtn")) {
    if (titleLower.includes("chào cờ") || titleLower.includes("dưới cờ")) {
      return ["Trang phục chỉnh tề (áo đồng phục trắng, khăn quàng đỏ, bảng tên, mũ/ghế ngồi theo quy định)."];
    }
    if (titleLower.includes("sinh hoạt lớp") || titleLower.includes("shl")) {
      return ["Sổ theo dõi thi đua của ban cán sự lớp, phiếu tự đánh giá rèn luyện tuần của các tổ."];
    }
    return ["Phiếu hoạt động nhóm, giấy màu/vật liệu tái chế hoặc thủ công phục vụ hoạt động trải nghiệm theo chủ đề."];
  }

  // 8. TIN HỌC
  if (subLower.includes("tin học") || subLower === "th") {
    return ["Máy tính thực hành tại phòng máy (chuột, bàn phím hoạt động tốt), phiếu giao nhiệm vụ thực hành."];
  }

  // 9. CÔNG NGHỆ
  if (subLower.includes("công nghệ") || subLower === "cn") {
    return ["Bộ lắp ghép mô hình kĩ thuật / vật liệu và dụng cụ thực hành theo bài học (kéo, hồ dán, giấy màu...)."];
  }

  // 10. MĨ THUẬT
  if (subLower.includes("mĩ thuật") || subLower === "mt") {
    return ["Giấy vẽ A4/bìa màu, màu vẽ (sáp màu/dạ màu/màu nước), kéo, hồ dán, đất nặn hoặc vật liệu sáng tạo theo chủ đề."];
  }

  // 11. ÂM NHẠC
  if (subLower.includes("âm nhạc") || subLower === "an" || subLower.includes("bdan")) {
    return ["Thanh phách gõ (hoặc nhạc cụ gõ tự làm), động tác cơ thể (body percussion), tâm thế thoải mái."];
  }

  // 12. TIẾNG ANH
  if (subLower.includes("tiếng anh") || subLower === "ta") {
    return ["Bộ thẻ từ vựng mini cá nhân để thực hành trò chơi ghép từ và luyện nói theo cặp, phiếu luyện tập nhóm."];
  }

  // 13. GIÁO DỤC THỂ CHẤT
  if (subLower.includes("thể chất") || subLower.includes("gdtc") || subLower === "td") {
    return ["Trang phục thể thao gọn gàng, đi giày thể thao sạch sẽ, bình nước uống cá nhân."];
  }

  // Fallback
  return ["Phiếu học tập cá nhân/nhóm, vật liệu hoặc tư liệu thực hành theo hướng dẫn cụ thể của giáo viên."];
}

/**
 * Subject-specific realistic and necessary teacher preparation
 */
export function getDefaultTeacherMaterials(subject: string, grade: number, lessonTitle: string = ""): string[] {
  const subLower = (subject || "").toLowerCase().trim();
  const titleLower = (lessonTitle || "").toLowerCase().trim();

  // 1. TOÁN
  if (subLower.includes("toán") || subLower === "t" || subLower.includes("tct")) {
    return [
      "Ti vi/máy chiếu, bài giảng điện tử tương tác (PPTX), mô hình/thẻ số/que tính trực quan phục vụ bài học.",
      "Phiếu học tập cá nhân và nhóm, bảng phụ ghi sẵn đề bài tập và bảng số liệu."
    ];
  }

  // 2. TIẾNG VIỆT
  if (subLower.includes("tiếng việt") || subLower === "tv" || subLower.includes("tctv")) {
    return [
      "Ti vi/máy chiếu, bài giảng điện tử (PPTX), tranh ảnh hoặc video clip tư liệu minh họa nội dung bài học.",
      "Bảng phụ ghi đoạn văn/thơ luyện đọc diễn cảm, phiếu bài tập nhóm/thẻ từ ngữ."
    ];
  }

  // 3. TỰ NHIÊN VÀ XÃ HỘI
  if (subLower.includes("tự nhiên") || subLower.includes("tnxh")) {
    return [
      "Ti vi/máy chiếu, bài giảng điện tử (PPTX), tranh ảnh hoặc video clip thực tế liên quan đến nội dung bài học.",
      "Phiếu học tập nhóm, các thẻ tình huống/thẻ tranh minh họa bài học."
    ];
  }

  // 4. KHOA HỌC
  if (subLower.includes("khoa học") || subLower === "kh") {
    return [
      "Ti vi/máy chiếu, bài giảng điện tử (PPTX), video clip thí nghiệm mô phỏng hoặc dụng cụ/mẫu vật thực nghiệm phục vụ bài dạy.",
      "Phiếu hướng dẫn các bước quan sát và ghi chép kết quả thí nghiệm cho các nhóm."
    ];
  }

  // 5. LỊCH SỬ VÀ ĐỊA LÍ
  if (subLower.includes("lịch sử") || subLower.includes("địa lí") || subLower.includes("ls&đl") || subLower.includes("ls-đl")) {
    return [
      "Ti vi/máy chiếu, bài giảng điện tử (PPTX), bản đồ/lược đồ phóng to, tranh ảnh hiện vật hoặc video clip tư liệu lịch sử - địa lí.",
      "Phiếu học tập nhóm, các thẻ câu hỏi tìm hiểu kiến thức."
    ];
  }

  // 6. ĐẠO ĐỨC
  if (subLower.includes("đạo đức") || subLower === "đđ") {
    return [
      "Ti vi/máy chiếu, bài giảng điện tử (PPTX), tranh ảnh hoặc video clip tình huống đạo đức thực tế liên quan bài học.",
      "Phiếu bài tập tình huống, bộ thẻ bày tỏ ý kiến (mặt cười / mặt mếu hoặc thẻ xanh / đỏ)."
    ];
  }

  // 7. HOẠT ĐỘNG TRẢI NGHIỆM
  if (subLower.includes("trải nghiệm") || subLower.includes("hđtn")) {
    if (titleLower.includes("chào cờ") || titleLower.includes("dưới cờ")) {
      return [
        "Kế hoạch tuần, sổ theo dõi nền nếp lớp, bài phát động thi đua theo chủ đề tuần của Liên đội và BGH nhà trường.",
        "Hệ thống âm thanh, micro, cờ Tổ quốc phục vụ nghi lễ Chào cờ."
      ];
    }
    if (titleLower.includes("sinh hoạt lớp") || titleLower.includes("shl")) {
      return [
        "Sổ chủ nhiệm, bảng tổng hợp điểm thi đua các tổ trong tuần, kế hoạch tuần học tiếp theo.",
        "Tài liệu và hình ảnh/video tình huống tích hợp An toàn giao thông."
      ];
    }
    return [
      "Ti vi/máy chiếu, bài giảng điện tử (PPTX), tranh ảnh hoặc video clip minh họa chủ đề bài học.",
      "Phiếu hoạt động trải nghiệm nhóm, các vật liệu mẫu hoặc thẻ nhiệm vụ trải nghiệm thực tế."
    ];
  }

  // 8. TIN HỌC
  if (subLower.includes("tin học") || subLower === "th") {
    return [
      "Phòng máy vi tính kết nối mạng nội bộ, máy tính giáo viên kết nối máy chiếu/ti vi màn hình lớn.",
      "Phần mềm thực hành mô phỏng, tệp dữ liệu bài tập mẫu, tài liệu hướng dẫn an toàn số."
    ];
  }

  // 9. CÔNG NGHỆ
  if (subLower.includes("công nghệ") || subLower === "cn") {
    return [
      "Ti vi/máy chiếu, mô hình trực quan, thiết bị/sản phẩm công nghệ mẫu, video clip hướng dẫn thao tác an toàn.",
      "Phiếu đánh giá sản phẩm / phiếu thảo luận nhóm."
    ];
  }

  // 10. MĨ THUẬT
  if (subLower.includes("mĩ thuật") || subLower === "mt") {
    return [
      "Ti vi/máy chiếu, bài giảng điện tử (PPTX), tranh ảnh tác phẩm mĩ thuật mẫu, video clip thị phạm thao tác sáng tạo.",
      "Vật liệu và sản phẩm thị phạm thực tế."
    ];
  }

  // 11. ÂM NHẠC
  if (subLower.includes("âm nhạc") || subLower === "an" || subLower.includes("bdan")) {
    return [
      "Đàn phím điện tử (Organ / Keyboard), loa và micro giảng dạy.",
      "Bài giảng điện tử trình chiếu video bài hát mẫu kèm lời ca, tranh ảnh minh họa nội dung bài học.",
      "Bộ nhạc cụ gõ: Thanh phách, song loan, trống con chuẩn bị cho các nhóm học tập."
    ];
  }

  // 12. TIẾNG ANH
  if (subLower.includes("tiếng anh") || subLower === "ta") {
    return [
      "Ti vi/máy chiếu màn hình lớn, loa trợ giảng, bài giảng số tương tác (PowerPoint/Canva) kèm tệp âm thanh (Audio tracks) phát âm giọng bản ngữ.",
      "Bộ thẻ từ vựng trực quan (Flashcards) và tranh ảnh theo chủ đề bài học."
    ];
  }

  // 13. GIÁO DỤC THỂ CHẤT
  if (subLower.includes("thể chất") || subLower.includes("gdtc") || subLower === "td") {
    return [
      "Sân tập sạch sẽ, an toàn; còi chỉ huy; tranh ảnh kỹ thuật động tác; dụng cụ thể thao theo bài học (bóng, dây nhảy, nấm mốc chỉ dẫn)."
    ];
  }

  // Fallback
  return [
    `Ti vi/máy chiếu, bài giảng điện tử tương tác, tranh ảnh/tư liệu minh họa môn ${subject} lớp ${grade}.`,
    "Phiếu học tập cá nhân và nhóm, dụng cụ trực quan phục vụ bài dạy."
  ];
}

/**
 * Main sanitizer function to sanitize materials of any LessonPlan
 */
export function sanitizeLessonPlanMaterials(
  materials: { teacher?: string[]; student?: string[] } | undefined,
  subject: string,
  grade: number,
  lessonTitle: string = ""
): CleanMaterialsResult {
  const rawTeacher = materials?.teacher || [];
  const rawStudent = materials?.student || [];

  // 1. Sanitize Student Materials
  let cleanedStudentList: string[] = [];
  for (const raw of rawStudent) {
    const cleaned = removeProhibitedPhrases(raw, true);
    if (cleaned && cleaned.length > 5) {
      cleanedStudentList.push(cleaned);
    }
  }

  // If student list became empty after stripping out default items (SGK, VBT, bảng con, phấn, nháp...)
  if (cleanedStudentList.length === 0) {
    cleanedStudentList = getDefaultStudentMaterials(subject, grade, lessonTitle);
  } else {
    // Check if remaining items are still generic or contain remaining prohibited items
    const combined = cleanedStudentList.join(" ").toLowerCase();
    if (
      combined.length < 12 || 
      combined.includes("đồ dùng học tập") || 
      combined.includes("dụng cụ học tập") ||
      combined.includes("bộ đồ dùng học toán") ||
      combined.includes("bảng con") ||
      combined.includes("vở bài tập") ||
      combined.includes("sách giáo khoa") ||
      combined.includes("nháp")
    ) {
      cleanedStudentList = getDefaultStudentMaterials(subject, grade, lessonTitle);
    }
  }

  // 2. Sanitize Teacher Materials
  let cleanedTeacherList: string[] = [];
  for (const raw of rawTeacher) {
    const cleaned = removeProhibitedPhrases(raw, false);
    if (cleaned && cleaned.length > 5) {
      cleanedTeacherList.push(cleaned);
    }
  }

  if (cleanedTeacherList.length === 0) {
    cleanedTeacherList = getDefaultTeacherMaterials(subject, grade, lessonTitle);
  } else {
    const combinedT = cleanedTeacherList.join(" ").toLowerCase();
    if (
      combinedT.length < 15 ||
      combinedT.includes("sách giáo khoa") ||
      combinedT.includes("sách giáo viên") ||
      combinedT.includes("kế hoạch bài dạy") ||
      combinedT.includes("giáo án")
    ) {
      cleanedTeacherList = getDefaultTeacherMaterials(subject, grade, lessonTitle);
    }
  }

  return {
    teacher: cleanedTeacherList,
    student: cleanedStudentList,
  };
}
