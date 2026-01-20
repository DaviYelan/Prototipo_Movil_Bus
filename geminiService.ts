
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are BusGo AI, a premium travel assistant for Ecuador. 
        You help users with bus schedules, luxury route recommendations, weather, and tourist crowd forecasts. 
        Be professional, helpful, and use emojis occasionally (🏔️, 🚌, 🇪🇨). 
        Mention specific Ecuadorian destinations like Baños, Quito, Guayaquil, Cuenca, and the Galapagos if relevant.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Lo siento, estoy teniendo problemas para conectarme. ¿Podrías intentar de nuevo?";
  }
};
