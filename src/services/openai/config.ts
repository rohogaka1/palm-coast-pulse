import OpenAI from 'openai'

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OpenAI API key')
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export interface SocialMediaPost {
  platform: 'facebook' | 'instagram' | 'linkedin' | 'twitter'
  content: string
  hashtags: string[]
  imagePrompt?: string
}

export interface MarketingContent {
  title: string
  description: string
  metaTags: {
    title: string
    description: string
    keywords: string[]
  }
  socialMediaPosts: SocialMediaPost[]
}

export const generateMarketingContent = async (
  businessName: string,
  businessDescription: string,
  category: string
): Promise<MarketingContent> => {
  const prompt = `Create marketing content for ${businessName}, a ${category} business. Description: ${businessDescription}`
  
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are an expert marketing copywriter and SEO specialist."
      },
      {
        role: "user",
        content: prompt
      }
    ]
  })

  // Process the response and structure it according to our needs
  // This is a simplified version - you would need to properly parse the response
  return {
    title: businessName,
    description: businessDescription,
    metaTags: {
      title: `${businessName} - Premier ${category} in Palm Coast`,
      description: businessDescription.slice(0, 160),
      keywords: [category, 'Palm Coast', 'business', businessName.toLowerCase()]
    },
    socialMediaPosts: [
      {
        platform: 'facebook',
        content: completion.choices[0]?.message?.content || '',
        hashtags: ['PalmCoast', category.replace(/\s+/g, '')]
      }
    ]
  }
} 