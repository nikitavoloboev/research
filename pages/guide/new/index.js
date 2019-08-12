/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
// import { Editor } from '@blocks/editor'

function NewGuidePage() {
    return (
        <div
            sx={{
                maxWidth: 1024,
                mx: 'auto',
                p: 3,
            }}
        >
            <title>New Guide</title>
            <Styled.h2 sx={{ textDecoration: "underline" }}>Create a new study guide</Styled.h2>
            {/* <Editor
                initialValue=""
                onChange={{}}
                components={{}}
            /> */}
        </div>
    )
}

export default NewGuidePage
