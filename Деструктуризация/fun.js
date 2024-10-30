const userProfile = {
    name: 'Bogdan',
    commentsQty: 23,
    hasAgreement: false,
}

const userInfo = ({name, commentsQty}) => {
    if(!commentsQty) {
        return `User ${name} has no comment`
    }else {
        return `User ${name} has ${commentsQty} comment`
    }
}

userInfo(userProfile);