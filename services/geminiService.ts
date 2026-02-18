import { GoogleGenAI } from "@google/genai";

const AI_KEY = process.env.API_KEY || ''; // In a real app, this comes from env

export const getGeminiResponse = async (userMessage: string, contextProduct?: string): Promise<string> => {
  if (!AI_KEY) {
    return "Hệ thống AI chưa được cấu hình (Thiếu API Key). Vui lòng liên hệ admin.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: AI_KEY });
    
    let systemInstruction = "Bạn là một trợ lý ảo chuyên nghiệp của T2T Solution. Bạn giúp khách hàng tư vấn về các sản phẩm công nghệ như laptop, điện thoại, máy ảnh, linh kiện PC. Hãy trả lời ngắn gọn, thân thiện và tập trung vào việc bán hàng. Nếu khách hỏi về giá, hãy nhắc họ xem trực tiếp trên web.";
    
    if (contextProduct) {
      systemInstruction += ` Khách hàng đang xem sản phẩm: ${contextProduct}. Hãy ưu tiên tư vấn về sản phẩm này.`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "Xin lỗi, tôi không thể trả lời ngay lúc này.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã có lỗi xảy ra khi kết nối với trợ lý ảo.";
  }
};