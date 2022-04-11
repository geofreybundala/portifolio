import React from 'react'

const Article = () => {
  return (
    <div className='container pt-5'>
        <h1 className='h'>My Articles</h1>

        <div className='row'>
            <div className='col-md-3 p-3 article-card m-1'> 
            <div>Article Title</div>
            <div>article summary</div>
            </div>

            <div className='col-md-3 p-4 article-card m-1'> 
            <div>Article Title</div>
            <div>article summary</div>
            </div>

            <div className='col-md-3 p-4 article-card m-1'> 
            <div>Article Title</div>
            <div>article summary</div>
            </div>

            <div className='col-md-3 p-4 article-card m-1'> 
            <div>Article Title</div>
            <div>article summary</div>
            </div>
        </div>
    </div>
  )
}

export default Article