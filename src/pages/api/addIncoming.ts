// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('!!!!! hello', req.body);
  try {
    await prisma.transIn.create({
      data: req.body,
    });

    return res.status(200).json(req.body);
  } catch (error) {
    return res.status(500).json(error);
  }
}
