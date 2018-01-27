// The initial state with default props
const state = {
  screenIndex: 0,
  loading: false,
  asyncProp: 'We will rock you!',
  formText: '',
  locales: 'jp',
  auth: false,
  user: localStorage['casec-user'],
  error: ''
}

const test = {
  reading: [
    {
      qid: 1,
      header: 'Who is the most handsome guy in the Casec-FE team?',
      body: "The truth is that development has a lot to do with both design and programming. They're not mutually exclusive. Trying to divide them in a cage match over who owns the term is as useless as Santa Cruz and Huntington Beach fighting over Surf City, USA."
    },
    {
      qid: 2,
      header: 'Why don\'t Tech-girls wear makeup at work?',
      body: "I called myself a web designer at the beginning of this post and that is my default answer for what I do. Some of my work happens to involve designing layouts. Some of it happens to involve coding prototypes. Some of it even requires me to write functions. All those pieces are what work together to develop a website, which is what I'm trying to do at the end of the day regardless of if I am seen as a designer or a developer."
    }
  ],
  listening: [],
  writing: [],
  speaking: []
}

// eslint-disable-next-line
export { state, test }
