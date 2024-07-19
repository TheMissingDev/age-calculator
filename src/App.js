import { useState } from "react";
import "./App.css";
import arrow from "./age-calculator-app-main/assets/images/icon-arrow.svg";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [err, setErr] = useState(false);
  const [id, setID] = useState(false);
  const [currentDate, setCurrentDate] = useState({
    day: null,
    month: null,
    year: null,
  });

  const handleDayChange = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    setDay(e.target.value);
    setIsClicked(false);
  };

  const handleMonthChange = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    setMonth(e.target.value);
    setIsClicked(false);
  };

  const handleYearChange = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    setYear(e.target.value);
    setIsClicked(false);
  };

  const handleClick = (e) => {
    const now = new Date();
    if (day == "") {
      setErr(true);
    } else if (day > 31) {
      setErr(true);
    } else {
      setErr(false);
    }
    if (month == "") {
      setErr(true);
    } else if (month > 12) {
      setErr(true);
    } else {
      setErr(false);
    }
    if (year == "") {
      setErr(true);
    } else if (year > now.getFullYear()) {
      setErr(true);
    } else {
      setErr(false);
    }
    setIsClicked(true);
    e.preventDefault();
    setCurrentDate({
      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear(),
    });
  };

  return (
    <>
      <div className="container">
        <div className="upper">
          <div className={`day ${isClicked ? (day == "" ? "error" : "") : ""}`}>
            <label htmlFor="Day">Day</label>
            <br />
            <input
              type="number"
              onChange={handleDayChange}
              value={day}
              placeholder="DD"
              maxLength={2}
            />
            <br />
            <span className="err" id="day">
              {day == "" && err
                ? "This field is required"
                : day > 31 && err
                ? "Must be a valid day"
                : ""}
            </span>
          </div>
          <div
            className={`month ${isClicked ? (month == "" ? "error" : "") : ""}`}
          >
            <label htmlFor="Month">Month</label>
            <br />
            <input
              type="number"
              onChange={handleMonthChange}
              value={month}
              placeholder="MM"
              maxLength={2}
            />
            <br />
            <span className="err">
              {month == "" && err
                ? "This field is required"
                : month > 12 && err
                ? "Must be a valid month"
                : ""}
            </span>
          </div>
          <div
            className={`year ${isClicked ? (year == "" ? "error" : "") : ""}`}
          >
            <label htmlFor="Year">Year</label>
            <br />
            <input
              type="number"
              onChange={handleYearChange}
              value={year}
              placeholder="YYYY"
              maxLength={4}
            />
            <br />
            <span className="err">
              {year == "" && err
                ? "This field is required"
                : year > new Date().getFullYear() && err
                ? "Must be in the past"
                : ""}
            </span>
          </div>
        </div>
        <div className="arr-img">
          <div tabIndex={0} className="arr">
            <img onClick={handleClick} src={arrow} alt="arrow.svg" />
          </div>
          <span className="line"></span>
        </div>
        <div className="cal">
          <p>
            <span className="dash">
              {isClicked
                ? !err
                  ? year !== ""
                    ? currentDate.year !== ""
                      ? Math.abs(year - currentDate.year)
                      : "- -"
                    : "- -"
                  : "- -"
                : "- -"}
            </span>
            years
          </p>
          <p>
            <span className="dash">
              {isClicked
                ? !err
                  ? month !== ""
                    ? currentDate.month !== ""
                      ? Math.abs(month - currentDate.month)
                      : "- -"
                    : "- -"
                  : "- -"
                : "- -"}
            </span>
            months
          </p>
          <p>
            <span className="dash">
              {isClicked
                ? !err
                  ? day !== ""
                    ? currentDate.day !== ""
                      ? Math.abs(day - currentDate.day)
                      : "- -"
                    : "- -"
                  : "- -"
                : "- -"}
            </span>
            days
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
