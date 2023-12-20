"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PrimaryButton from "../Buttons/PrimaryButton";
import ImageCarousel from "../Carousel/ImageCarousel";

interface Props {
  buttonText: string;
  titleProject: string;
  projectPictures?: string[] | [];
}

export default function MaxWidthDialog({
  buttonText,
  titleProject,
  projectPictures,
}: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <PrimaryButton text={buttonText} onClick={handleClickOpen} />

      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle className="flex justify-between text-3xl bg-white text-black dark:bg-black dark:text-white">
          {titleProject}
          <Button onClick={handleClose} className=" text-black dark:text-white">
            Close
          </Button>
        </DialogTitle>
        <DialogContent className="bg-white text-black dark:bg-black dark:text-white">
          <ImageCarousel pictures={projectPictures ? projectPictures : []} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
