import React from "react";

import styled from "styled-components";

import Button from "../BasicComponents/Button";
import Close from "../BasicComponents/icons/Close";
import Overlay from "./Overlay";

const Modal = ({ children, title, onClose, onSave }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <ModalStyled>
        <ModalHeader>
          <span>{title}</span>
          <CloseStyled onClick={onClose}>
            <Close color="" />
          </CloseStyled>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose} variant="danger">
            Cancel
          </Button>
          <Button onClick={onSave} variant="success">
            Save
          </Button>
        </ModalFooter>
      </ModalStyled>
      <Overlay onClick={onClose} />
    </div>
  );
};

const ModalStyled = styled.div`
  background: #fff;
  max-height: 80%;
  margin: auto;
  width: 80%;
  max-width: 500px;
  border-radius: 8px;
  top: 80px;
  z-index: 10;
  position: relative;
  padding: 16px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;
  color: #333;
  font-weight: bold;
  padding: 0 16px 16px;
  border-bottom: 1px solid #999;
  position: absolute;
  left: 0;
`;

const ModalBody = styled.div`
  padding: 8px 12px;
  margin-top: 54px;
  max-height: 30%;
  overflow-x: auto;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;
  color: #333;
  font-weight: bold;
  padding: 8px 12px;
  border-top: 1px solid #999;
  bottom: 0;
  left: 0;
  position: absolute;
  background: #fff;
  border-radius: 0 0 8px 8px;
`;

const CloseStyled = styled.div`
  cursor: pointer;
  & svg {
    fill: #333;
  }
  &:hover svg {
    fill: #2f74b5;
  }
`;

export default Modal;
