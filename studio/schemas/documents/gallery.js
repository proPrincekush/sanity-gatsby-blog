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
      name:"galleryCategory",
      type:"reference",
      title:"galleryCategory",
      to:[{
        type:"galleryCategory"
      }]
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    }
  ]
}
