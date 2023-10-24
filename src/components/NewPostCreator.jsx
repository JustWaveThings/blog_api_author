import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Link } from 'react-router-dom';
import postCreator from '../utils/postCreator';

// simple test post

export default function NewPostCreator() {
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
      <Editor
        tinymceScriptSrc={'./tinymce/tinymce.min.js'}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=''
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
      <Link to='/'>Go to Editor Home </Link>
      <label>
        Publish:
        <input type='checkbox' name='publish' value='true' />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
}
