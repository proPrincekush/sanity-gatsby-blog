export default {
  name: 'gallery',
  type: 'document',
  title: 'Gallery',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },{
      name: 'galleryCategory',
      title:"Category",
      type:"array",
      of:[{
        type:"reference",
        to:[{
          type:"galleryCategory"
        }]
      }]
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    }
  ]
}
