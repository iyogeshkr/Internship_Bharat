// services/geminiService.ts

export const getGeminiHelp = async (prompt: string) => {
  // This version does not call any API and requires no key
  console.log("AI Query:", prompt);
  return "AI Assistant is currently disabled. Please contact the administrator to enable this feature.";
};
