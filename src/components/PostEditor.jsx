import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { editorFetch, postEditor } from '../utils/api';

export function loader({ params }) {
  return editorFetch(params.id);
}

export default function PostEditor() {
  const post = useLoaderData();
  const editorRef = useRef(null);
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    const { title, subtitle, publish } = Object.fromEntries(
      new FormData(e.target)
    );
    await postEditor(
      editorRef.current.getContent(),
      title,
      subtitle,
      publish,
      post._id
    );
    navigate(`/author/${post._id}`);
  }

  return (
    <form onSubmit={submit}>
      <label>
        Title:
        <input name='title' type='text' defaultValue={post.title} />
      </label>
      <label>
        Subtitle:
        <input name='subtitle' type='text' defaultValue={post.subtitle} />
      </label>

      <Editor
        scriptLoading={{ async: true }}
        tinymceScriptSrc={'../tinymce/tinymce.min.js'}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={post.body}
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

      <Link to='/'>Post List</Link>
      <span> | </span>
      {!post.published && (
        <>
          <label>
            Publish:
            <input type='checkbox' name='publish' value='true' />
          </label>
          <span> | </span>
        </>
      )}
      <Link to={`/author/${post._id}`}>Cancel</Link>
      <span> | </span>
      <button type='submit'>Update Post</button>
    </form>
  );
}
