import { useState, useEffect } from 'react';
import {
  CURRENT_LANG_README_PATH,
  STATUS,
  DEFAULT_README_PATH,
} from './constants';

export const useReadme = () => {
  const [status, setStatus] = useState<null | string>(null);
  const [markdownFile, setMarkdownFile] = useState('');

  useEffect(() => {
    fetch(CURRENT_LANG_README_PATH)
      .then(res => res.text())
      .then(setMarkdownFile)
      .then(() => setStatus(STATUS.success))
      .catch(error => {
        if (CURRENT_LANG_README_PATH !== DEFAULT_README_PATH) {
          fetch(DEFAULT_README_PATH)
            .then(res => res.text())
            .then(setMarkdownFile)
            .then(() => setStatus(STATUS.success))
            .catch(error => {
              setStatus(STATUS.failure);
              console.error(error);
            });
        } else {
          setStatus(STATUS.failure);
          console.error(error);
        }
      });
  }, []);

  return { readme: markdownFile, isSuccess: status === STATUS.success };
};
