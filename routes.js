import { Router } from 'express'
import { helloWorldController } from './controllers/testController.js';
import * as userController from './controllers/userControllers.js';
import * as videoController from './controllers/videoControllers.js'
import * as productController from './controllers/productControllers.js'
import * as commentController from './controllers/commentControllers.js'

const router  = Router();
router.get('/', helloWorldController);

router.post('/user', userController.createNewUserController)
router.get('/user', userController.getAllUserController)

router.post('/video', videoController.createVideoController)
router.get('/video', videoController.getAllVideosController)
router.get('/video/:videoId', videoController.getVideoByIdController)
router.post('/video/:videoId/populate-products', videoController.populateProductsForVideo)

router.post('/product', productController.createProductController)
router.get('/product', productController.getAllProductsController)
router.get('/product/:productId', productController.getProductByIdController)

router.post('/video/:videoId/comment', commentController.createCommentController)
router.get('/video/:videoId/comments', commentController.getCommentsByVideoIdController)

export default router;