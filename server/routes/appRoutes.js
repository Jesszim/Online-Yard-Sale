import express from 'express'
import appControllers from '../controllers/appControllers.js'
import cartControllers from '../controllers/cartControllers.js'
import itemControllers from '../controllers/itemControllers.js'
import { upload } from '../db/multer/index.js'


const router = express.Router()

router.route('/adduser').post(appControllers.addUser)
router.route('/login').post(appControllers.login)
router.route('/refresh').post(appControllers.validateAuth)


router.route('/getitems').get(itemControllers.getAllItems)
router.route('/additem').post(upload.single('image'), itemControllers.addItem)
router.route('/deleteitem').delete(itemControllers.deleteItem)
router.route('/updateitem').patch(itemControllers.updateItem)
router.route('/searchitem').get(itemControllers.searchItems)

router.route('/orderform').post(cartControllers.checkout)

export default router