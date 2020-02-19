import React, { useState, useEffect } from 'react';

import classnames from 'classnames';

import './style.scss';

import { Text, Paper, Button, Icon } from 'components';

import {
  useTranslator
} from 'utils/translator';

const Collapse = ({ data, darkMode }) => {
  const [expand, setExpand] = useState(true);
  const [open, setOpend] = useState(false);

  const { t } = useTranslator();

  const toggleContent = (id) => {
    (open !== id) ? setOpend(id) : setOpend(false);
    setExpand(!expand);
  }

  useEffect(() => {
    setExpand(false);
  }, []);

  return data.length && data.map((elem) => (
    <Paper key={elem.id} className="Collapse">
      <Paper className={classnames("collapse-item", { "bg-collapse": open === elem.id })} flexName="flexible jBetween aCenter">
        <Paper className="title-content" flexName="flexible aCenter">
          <Icon onClick={() => toggleContent(elem.id)}
            className={classnames("plus-icon", { "plus-icon-2": open === elem.id })} name="plus" />
          <Text darkMode={darkMode}>{elem.name}</Text>
        </Paper>  
        <Paper onClick={() => toggleContent(elem.id)} className="btn-container">
          <Button bgColor="green">
            {t("_ViewMore_")}
          </Button>
        </Paper>
      </Paper>
      <Paper
        flexName="flexible jCenter"
        className={classnames('collapse-body', { "content-opened": elem.id === open })}
      >
        <Paper
          className={classnames("collapse-content")}>
          {elem.content}
        </Paper>
      </Paper>
    </Paper>

  ));
}

export default Collapse;

