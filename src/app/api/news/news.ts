import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const pageSize = 3   // 取得したい記事の数
    const topRes = await fetch(
        `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=`
    );
    const topJson = await topRes.json();
    const topArticles = topJson?.articles;

    res.status(200).json({ topArticles })
}
