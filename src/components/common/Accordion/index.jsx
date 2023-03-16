import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import styles from "./accordion.module.scss";

const Accordian = ({
  header,
  children,
  accordianClassName,
  summaryClassName,
  detailsClassName,
}) => {
  return (
    <div>
      <Accordion
        className={`${styles.accrodionWrapper} ${accordianClassName}`}
        defaultExpanded
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.arrowIcon} />}
          className={`${styles.accrodionSummary} ${summaryClassName}`}
        >
          <Typography>{header}</Typography>
        </AccordionSummary>
        <AccordionDetails
          className={`${styles.accrodionDetails} ${detailsClassName}`}
        >
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordian;
