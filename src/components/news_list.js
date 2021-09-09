import React from 'react';

import NewsListItem from './news_list_item';

const NewsList = (props) => {

    const news = props.news.map((item)=>(
            <NewsListItem
                item={item} key ={item.id}
            />
    ))

    return(
        <>
            { news }
            { props.children }
        </>
    )
}

export default NewsList;