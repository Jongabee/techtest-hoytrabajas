import { NextApiRequest, NextApiResponse } from 'next';
import { getCart, addToCart } from '../../../utils/cart';
import { ApiResponse, CartItem, AddToCartRequest } from '../../../utils/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<CartItem[]>>
) {
  if (req.method === 'GET') {
    try {
      const cart = getCart();
      res.status(200).json({
        success: true,
        data: cart
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'No se pudo obtener el carrito'
      });
    }
  } else if (req.method === 'POST') {
    try {
      const { productId }: AddToCartRequest = req.body;

      if (!productId || typeof productId !== 'number') {
        return res.status(400).json({
          success: false,
          error: 'productId inválido. Debe ser un número.'
        });
      }

      const result = addToCart(productId);

      if (!result.success) {
        return res.status(400).json({
          success: false,
          error: result.error
        });
      }

      const updatedCart = getCart();
      res.status(200).json({
        success: true,
        data: updatedCart
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'No se pudo agregar el producto al carrito'
      });
    }
  } else {
    res.status(405).json({
      success: false,
      error: 'Método no permitido'
    });
  }
}
