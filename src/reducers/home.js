const HOME_LIST = {
  banner: [
    {
      id: 1,
      img_src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1698941678,81612466&fm=26&gp=0.jpg'
    },
    {
      id: 2,
      img_src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3594338476,4132050718&fm=26&gp=0.jpg'
    }
  ],
  test: [
    {
      name: 'test',
      desc: 'only a test'
    }
  ]
}

export default function home(state=HOME_LIST, action) {
  switch(action.type) {
    default:
      return state;
  }
}