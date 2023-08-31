// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.body);
    await prisma.collecting.create({
      data: req.body,
    });

    return res.status(200).json(req.body);
  } catch (error) {
    return res.status(500).json(error);
  }
}
