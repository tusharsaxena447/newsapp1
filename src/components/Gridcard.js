import React, { Component } from 'react'

export default class Gridcard extends Component {
    render() {
        let {title, description, imageUrl, url} = this.props

        return (


            <div className=" max-w-md bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700  md:m-3 md:rounded-lg">
                <a href={url} target='_blank' rel='noreferrer'>
                    <img className="md:rounded-t-lg h-64 w-full" src={imageUrl} alt= "" />
                </a>
                <div className="p-5">
                    <a href={url} target='_blank' rel='noreferrer'>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-Ubuntu">{title}</h5>
                    </a>
                    <p className="mb-3 font-Ubuntu text-gray-700 dark:text-gray-400">{description}</p>
                    {/* <a href={url} target= '_blank'  rel="noreferrer" className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a> */}
                </div>
            </div>


        )
    }
}
