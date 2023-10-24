import React, { useRef, Suspense } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Link, useLoaderData, Await } from 'react-router-dom';
import postCreator from '../utils/postCreator';

export default function PostEditor() {
  const post = useLoaderData();
  const editorRef = useRef(null);
  function submit(e) {
    e.preventDefault();
    const { title, subtitle, publish } = Object.fromEntries(
      new FormData(e.target)
    );
    postCreator(editorRef.current.getContent(), title, subtitle, publish);
  }

  return (
    <form onSubmit={submit}>
      <label>
        Title:
        <input name='title' type='text' placeholder='Title' />
      </label>
      <label>
        Subtitle:
        <input name='subtitle' type='text' placeholder='Subtitle' />
      </label>

      <Suspense fallback={<h2>loading editor...</h2>}>
        <Await resolve={post}>
          <Editor
            scriptLoading={{ async: true }}
            tinymceScriptSrc={'../tinymce/tinymce.min.js'}
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue='<p>sample text...</p>'
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist',
                'autolink',
                'lists',
                'link',
                'image',
                'charmap',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'fullscreen',
                'insertdatetime',
                'media',
                'table',
                'preview',
                'help',
                'wordcount',
              ],
              toolbar:
                'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:12px }',
              skin: 'oxide-dark',
              content_css: 'dark',
            }}
          />
        </Await>
      </Suspense>
      <Link to='/'>Go to Editor Home </Link>
      <label>
        Publish:
        <input type='checkbox' name='publish' value='true' />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
}
