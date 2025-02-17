import { Mongo } from '../database/mongo.js'
import { ObjectId } from 'mongodb'
import crypto from 'crypto'

const collectionName = 'products'

export default class ProductsDataAccess {
  async getProducts() {
    const result = await Mongo.db.collection(collectionName).find({}).toArray()

    return result
  }

  async getAvailableProducts() {
    const result = await Mongo.db
      .collection(collectionName)
      .find({ available: true })
      .toArray()

    return result
  }

  async getProductsByHeadphonesCategory() {
    const result = await Mongo.db
      .collection(collectionName)
      .find({ category: 'Headphones', available: true })
      .toArray()

    return result
  }

  async getProductsByControllersCategory() {
    const result = await Mongo.db
      .collection(collectionName)
      .find({ category: 'Controllers', available: true })
      .toArray()

    return result
  }

  async getProductsByMixersCategory() {
    const result = await Mongo.db
      .collection(collectionName)
      .find({ category: 'Mixers', available: true })
      .toArray()

    return result
  }

  async addProduct(productData) {
    const result = await Mongo.db
      .collection(collectionName)
      .insertOne(productData)

    return result
  }

  async deleteProduct(productId) {
    const result = await Mongo.db
      .collection(collectionName)
      .findOneAndDelete({ _id: new ObjectId(productId) })

    return result
  }

  async updateProduct(productId, productData) {
    const result = await Mongo.db
      .collection(collectionName)
      .findOneAndUpdate({ _id: new ObjectId(productId) }, { $set: productData })

    return result
  }
}
