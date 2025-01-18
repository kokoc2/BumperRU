
let tempReviews = {
    MessageAdd : [
        {id:1, text:'Класс, все понравилость',src:'https://m.buro247.ru/images/dasha/news/putin4.jpg'},
        {id:2, text:'Класссс, все понравилость',src:'https://m.buro247.ru/images/dasha/news/putin4.jpg'},
        {id:3, text:'Класссссс, все понравилость',src:'https://m.buro247.ru/images/dasha/news/putin4.jpg'},
        {id:4, text:'1234 j5',src:'https://m.buro247.ru/images/dasha/news/putin4.jpg'},
    ],
    MessageAddTemp:'hyu',   
    }

const ReviewsReducer=(action, state = tempReviews)=>{
    
    switch(action.type){
        case 'addReviewsTemp':
            
            state.MessageAddTemp = action.tempText;
            return state;
            
        case 'addReviews':
            let MessageAdd = {
                id: 5, 
                text: state.MessageAddTemp,
                src: 'https://m.buro247.ru/images/dasha/news/putin4.jpg'
            }
            state.MessageAdd.push(MessageAdd);
            state.MessageAddTemp = ''
            return state;

        default:
            return state;
    }
}


export const addReviewsCreator=()=>{
    return ({ type: 'addReviews'})
}
export const addReviewsTempCreator=(tempText)=>{
    return ({ type: 'addReviewsTemp', tempText : tempText})
}


export default ReviewsReducer;