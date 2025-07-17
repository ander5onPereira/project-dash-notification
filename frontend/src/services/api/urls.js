const urlBase = '/api';
export const urls = {
  news:{
    getAll: `${urlBase}/news`,
    getOne: `${urlBase}/news/{{id}}`,
    create: `${urlBase}/news`,
    update: `${urlBase}/news/{{id}}`,
    delete: `${urlBase}/news/{{id}}`,
    getActive: `${urlBase}/news/active/{{status}}`,
  },
  product:{
    getAll: `${urlBase}/product`,
    getOne: `${urlBase}/product/{{id}}`,
    create: `${urlBase}/product`,
    update: `${urlBase}/product/{{id}}`,
    delete: `${urlBase}/product/{{id}}`,
  }
}