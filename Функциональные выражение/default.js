// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt,
// })

// const firstPost = {
//     id: 1,
//     author: 'Milana',
// }

// const secondPost = {
//     id: 2,
//     author: 'Milana',
//     number: 2,
// }

// newPost(firstPost);
// newPost(secondPost);
// console.log(newPost(firstPost));
// console.log(newPost(secondPost));

const regist = ( date, addconstanta = Date()) => ({
    ...date,
    addconstanta,
})

const userOne = {
    name: 'Milana',
    lastName: 'Zhusubalieva',
    date: 32,
}

regist(userOne);
console.dir(regist(userOne));