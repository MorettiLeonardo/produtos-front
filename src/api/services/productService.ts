import api from '../api'

export async function getProducts() {
  const response = await api.get('/produtos')
  return response.data
}

export async function getProductsById(id: string) {
  const response = await api.get(`/produtos/${id}`)
  return response.data
}
