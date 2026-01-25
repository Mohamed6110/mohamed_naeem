
import { GoogleGenAI } from "@google/genai";
import { portfolioData } from "./data";

const resumeContext = `
Role: AI Assistant for Mohammed Naeem Fawzy
Context: You are representing Mohammed Naeem Fawzy, a world-class AI Engineer.
Resume Details:
- Name: ${portfolioData.name}
- Title: ${portfolioData.title}
- Summary: ${portfolioData.summary}
- Education: ${portfolioData.education.degree} from ${portfolioData.education.institution}, GPA: ${portfolioData.education.gpa}
- Skills: ${portfolioData.skillGroups.map(g => `${g.category}: ${g.skills.join(', ')}`).join(' | ')}
- Projects: ${portfolioData.projects.map(p => `${p.title}: ${p.description} (Tools: ${p.tools.join(', ')}. Metrics: ${p.metrics})`).join(' | ')}
- Experience: ${portfolioData.internships.map(i => `${i.role} at ${i.company}. Highlights: ${i.achievements.join('; ')}`).join(' | ')}

Instructions: 
1. Answer questions about Mohammed's professional background, technical skills, and projects accurately. 
2. Maintain a professional, confident, and helpful tone. 
3. Be concise; use bullet points for long lists. 
4. If asked something outside Mohammed's professional scope, politely redirect the user to his contact information.
`;

export async function askResume(question: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [{ role: 'user', parts: [{ text: question }] }],
      config: {
        systemInstruction: resumeContext,
        temperature: 0.7,
      }
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    if (error instanceof Error && error.message.includes("API key")) {
      return "There is an issue with the AI configuration (API Key). Please contact the site owner.";
    }
    return "Error connecting to Mohammed's AI. Please try again later.";
  }
}
