import { NextApiRequest, NextApiResponse } from 'next';
import { PRODUCTS } from '../../utils/data';
import { ApiResponse, Product } from '../../utils/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Product[]>>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Método no permitido'
    });
  }

  try {
    res.status(200).json({
      success: true,
      data: PRODUCTS
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error interno del servidor'
    });
  }
}
