import React from 'react'
import {useQuery} from 'react-apollo'

import {useCssHandles} from 'vtex.css-handles'

import getGif from './queries/gifs.gql'

const CSS_HANDLES = ['gif'] as const

const Gif: StorefrontFunctionComponent<GifProps> = ({ term = 'VTEX' }) => {
    const handles = useCssHandles(CSS_HANDLES)
    const {data, loading, error} = useQuery(getGif, {
        variables: {term}
    })

    if(loading || error) return null;

    return (
        <div className={`${handles.gif} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
            <img src={data.gif} />
        </div>
    )
}

interface GifProps {
    term: string
}

Gif.schema = {
    title: 'editor.countdown-gif.title',
    description: 'editor.countdown-gif.description',
    type: 'object',
    properties: {
        term: {
            title: 'admin/gif.term.title',
            description: 'admin/gif.term.description',
            type: 'string',
            default: null,
        },
    }
}

export default Gif