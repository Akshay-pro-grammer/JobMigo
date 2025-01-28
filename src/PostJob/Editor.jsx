import { Button, Input } from "@mui/material";
import StarterKit from "@tiptap/starter-kit";
import { useRef, useState } from "react";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HighlightIcon from '@mui/icons-material/Highlight';
import AddLinkIcon from '@mui/icons-material/AddLink';

import {
  MenuButtonBold,
  MenuButtonCode,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
} from "mui-tiptap";
import { TextAlign } from "@tiptap/extension-text-align"; // Extension for alignment
import { Strike } from "@tiptap/extension-strike"; // Extension for strike-through
import { Underline } from "@tiptap/extension-underline"; // Extension for underline
import { BulletList } from "@tiptap/extension-bullet-list"; // Extension for bullet list
import { Link } from "@tiptap/extension-link"; // Extension for adding links
import { Highlight } from '@tiptap/extension-highlight'; // Extension for highlighting

const Editor = () => {
  const rteRef = useRef(null);
  const [link, setLink] = useState('');

  const handleAddLink = () => {
    if (link && rteRef.current?.editor) {
      rteRef.current.editor
        .chain()
        .focus()
        .setLink({ href: link })
        .run();
      setLink(''); // Clear input after adding link
    }
  };

  const handleToggleHighlight = () => {
    if (rteRef.current?.editor) {
      rteRef.current.editor.chain().focus().toggleHighlight().run();
    }
  };

  return (
    <div>
      <RichTextEditor
        ref={rteRef}
        extensions={[
          StarterKit,
          TextAlign.configure({
            types: ['heading', 'paragraph'],
          }),
          Strike,
          Underline,
          BulletList,
          Link, // Add the link extension
          Highlight, // Add the highlight extension
        ]}
        content="<h4>About The Job</h4><p>Write description here...</p><h4>Responsibilities</h4><ul><li>Add responsibilities here...</li></ul><h4>Qualifications and Skill Sets</h4><ul><li>Add required qualification and skill set here...</li></ul>" // Initial content for the editor
        renderControls={() => (
          <MenuControlsContainer className="">
            <MenuSelectHeading />
            <MenuButtonCode />
            <MenuDivider />
            <MenuButtonBold />
            <MenuButtonItalic />
            <MenuDivider />
            {/* Align buttons */}
            <Button onClick={() => rteRef.current?.editor?.chain().focus().setTextAlign('left').run()}>
              <FormatAlignLeftIcon/>
            </Button>
            <Button onClick={() => rteRef.current?.editor?.chain().focus().setTextAlign('center').run()}>
              <FormatAlignCenterIcon/>
            </Button>
            <Button onClick={() => rteRef.current?.editor?.chain().focus().setTextAlign('right').run()}>
              <FormatAlignRightIcon/>
            </Button>
            <MenuDivider />
            {/* Underline and Strikethrough buttons */}
            <Button onClick={() => rteRef.current?.editor?.chain().focus().toggleUnderline().run()}>
              <FormatUnderlinedIcon/>
            </Button>
            <Button onClick={() => rteRef.current?.editor?.chain().focus().toggleStrike().run()}>
              <StrikethroughSIcon/>
            </Button>
            <MenuDivider />
            {/* Bullet list button */}
            <Button onClick={() => rteRef.current?.editor?.chain().focus().toggleBulletList().run()}>
              <FormatListBulletedIcon/>
            </Button>
            <MenuDivider />
            {/* Link input and button */}
            <Input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter link URL"
              style={{ padding: "5px", marginRight: "10px" }}
            />
            <Button onClick={handleAddLink}><AddLinkIcon/></Button>
            <MenuDivider />
            <Button onClick={handleToggleHighlight}>
              <HighlightIcon />
            </Button>
          </MenuControlsContainer>
        )}
      />

      {/* <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
        Log HTML
      </Button> */}
    </div>
  );
};

export default Editor;
