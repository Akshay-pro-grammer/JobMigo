import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";
import React from "react";

const Notification = ({ open, setOpen, loading, type = "success", title, message }) => {
  return (
    <>
      {/* Snackbar Notification */}
      <Snackbar
        className="z-[2000]"  // Increased z-index for Snackbar
        open={open}
        autoHideDuration={4000} // Closes after 4 seconds
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "left" }} // ✅ Moved to top-left
      >
        <Alert severity={type} onClose={() => setOpen(false)}>
          <strong>{title}</strong> - {message}
        </Alert>
      </Snackbar>

      {/* Loading Overlay */}
      <Backdrop sx={{ color: "#fff"}} open={loading}>
        <CircularProgress color={type === "success" ? "success" : "error"} />
      </Backdrop>
    </>
  );
};

export default Notification;
