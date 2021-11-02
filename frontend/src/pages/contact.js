import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import { makeStyles, useTheme } from "@material-ui/core/styles"
import clsx from "clsx"

import address from "../images/address.svg"
import Email from "../images/EmailAdornment"
import send from "../images/send.svg"
import InputAdornment from "@material-ui/core/InputAdornment"
import nameAdornment from "../images/name-adornment.svg"
import PhoneAdornment from "../images/PhoneAdornment"
import validate from "../components/ui/validate"

import Layout from "../components/ui/Layout"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: "45rem",
    backgroundColor: theme.palette.primary.main,
    marginBottom: "10rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "8rem",
      height: "90rem",
    },
  },
  formContainer: {
    height: "100%",
  },
  formWrapper: {
    height: "100%",
    [theme.breakpoints.down("md")]: {
      height: "50%",
      marginTop: "-8rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  blockContainer: {
    backgroundColor: theme.palette.secondary.main,
    height: "8rem",
    width: "40rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  titleContainer: {
    marginTop: "-4rem",
  },
  buttonContainer: {
    marginBottom: "-4rem",
    textTranform: "none",
    borderRadius: "0",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  sendIcon: {
    marginLeft: "2rem",
  },
  sendMessage: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  contactInfo: {
    fontSize: "1rem",
    marginLeft: "1rem",
  },
  contactIcon: {
    height: "3rem",
    width: "3rem",
  },
  contactEmailIcon: {
    height: "2.25rem",
    width: "3rem",
  },
  infoContainer: {
    height: "21.25rem",
    [theme.breakpoints.down("xs")]: {
      height: "15.25rem",
    },
  },
  middleInfo: {
    borderTop: "2px solid #fff",
    borderBottom: "2px solid #fff",
  },
  iconContainer: {
    borderRight: "2px solid #fff",
    height: "7rem",
    width: "8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: "5rem",
      width: "6rem",
    },
  },
  textField: {
    width: "30rem",
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
      padding: "0 1rem",
    },
  },
  input: {
    color: "#fff",
  },
  fieldContainer: {
    marginBottom: "1rem",
  },
  multilineContainer: {
    marginTop: "1rem",
  },
  multiline: {
    border: "2px solid #fff",
    borderRadius: 10,
    padding: "1rem",
  },
  multilineError: {
    border: `2px solid ${theme.palette.error.main}`,
  },
  emailAdornment: {
    height: 17,
    width: 22,
    marginBottom: 10,
  },
  phoneAdornment: {
    width: 25.173,
    height: 25.122,
  },
  buttonDisabled: {
    backgroundColor: theme.palette.grey[500],
  },
  "@global": {
    ".MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before":
      {
        borderBottom: "2px solid #fff",
      },
    ".MuiInput-underline:after": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  },
}))

const ContactPage = () => {
  const classes = useStyles()
  const theme = useTheme()

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const fields = {
    name: {
      helperText: "Please enter a name",
      placeholder: "Name",
      adornment: <img src={nameAdornment} alt="Enter name" />,
    },
    email: {
      helperText: "Please enter a valid email",
      placeholder: "Email",
      adornment: (
        <div className={classes.emailAdornment}>
          <Email color={theme.palette.secondary.main} />
        </div>
      ),
    },
    phone: {
      helperText: "Please enter a valid phone number",
      placeholder: "Phone number",
      adornment: (
        <div className={classes.phoneAdornment}>
          <PhoneAdornment color={theme.palette.secondary.main} />
        </div>
      ),
    },
    message: {
      helperText: "Please enter a message",
      placeholder: "Message",
      inputClasses: {
        multiline: classes.multiline,
        error: classes.multilineError,
      },
    },
  }

  const info = [
    {
      label: (
        <>
          1234 S Example St
          <br />
          Wichita,KS 676111
        </>
      ),
      icon: <img className={classes.contactIcon} src={address} alt="address" />,
    },
    {
      label: "(555) 555-5555",
      icon: (
        <div className={classes.contactIcon}>
          <PhoneAdornment />
        </div>
      ),
    },
    {
      label: "samrood.kl@gmail.com",
      icon: (
        <div className={classes.contactEmailIcon}>
          <Email color="#fff" />
        </div>
      ),
    },
  ]

  const [errors, setErrors] = useState({})
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

  const isDisabled =
    Object.keys(errors).some(field => errors[field]) ||
    Object.keys(errors).length !== 4

  return (
    <Layout>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        classes={{ root: classes.mainContainer }}
        direction={matchesMD ? "column" : "row"}
      >
        {/* Contact form */}
        <Grid item classes={{ root: classes.formWrapper }}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            classes={{ root: classes.formContainer }}
          >
            <Grid
              item
              classes={{
                root: clsx(classes.titleContainer, classes.blockContainer),
              }}
            >
              <Typography variant="h4">Contact Us</Typography>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                {Object.keys(fields).map(field => {
                  const validateHelper = e => {
                    const valid = validate({ [field]: e.target.value })
                    setErrors({ ...errors, [field]: !valid[field] })
                  }
                  return (
                    <Grid
                      key={field}
                      item
                      classes={{
                        root:
                          field === "message"
                            ? classes.multilineContainer
                            : classes.fieldContainer,
                      }}
                    >
                      <TextField
                        value={values[field]}
                        onChange={e => {
                          if (errors[field]) {
                            validateHelper(e)
                          }
                          setValues({ ...values, [field]: e.target.value })
                        }}
                        onBlur={e => validateHelper(e)}
                        error={errors[field]}
                        helperText={errors[field] && fields[field].helperText}
                        placeholder={fields[field].placeholder}
                        classes={{ root: classes.textField }}
                        multiline={field === "message"}
                        rows={field === "message" ? 8 : undefined}
                        InputProps={{
                          classes: {
                            input: classes.input,
                            ...fields[field].inputClasses,
                          },
                          disableUnderline: field === "message",
                          startAdornment:
                            field === "message" ? null : (
                              <InputAdornment position="start">
                                {fields[field].adornment}
                              </InputAdornment>
                            ),
                        }}
                      />
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
            <Grid
              item
              component={Button}
              disabled={isDisabled}
              classes={{
                root: clsx(classes.buttonContainer, classes.blockContainer, {
                  [classes.buttonDisabled]: isDisabled,
                }),
              }}
            >
              <Typography variant="h4" classes={{ root: classes.sendMessage }}>
                Send message
              </Typography>
              <img src={send} className={classes.sendIcon} alt="send message" />
            </Grid>
          </Grid>
        </Grid>
        {/* Contact Info */}
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            classes={{ root: classes.infoContainer }}
          >
            {info.map((section, i) => (
              <Grid
                key={section.label}
                item
                container
                alignItems="center"
                classes={i === 1 ? { root: classes.middleInfo } : undefined}
              >
                <Grid item classes={{ root: classes.iconContainer }}>
                  {section.icon}
                </Grid>
                <Grid item>
                  <Typography
                    variant="h2"
                    classes={{ root: classes.contactInfo }}
                  >
                    {section.label}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ContactPage
