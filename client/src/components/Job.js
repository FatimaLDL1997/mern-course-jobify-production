import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt, } from 'react-icons/fa'
import {MdDeleteOutline} from 'react-icons/md'
import {AiOutlineEdit} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Job'
import JobInfo from './JobInfo'
import { icons } from 'react-icons/lib'

const Job = ({
  _id,
  title,
  note,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const { setEditJob, deleteJob } = useAppContext()

  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')
  return (
    <Wrapper>
      <header>
        {/* <div className='main-icon'>{title.charAt(0)}</div> */}
        <div className='info'>
          <h5>{title}</h5>
          <p>{note.length > 10 ? note.slice(0,10) : note}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          {/* <JobInfo icon={<FaLocationArrow />} text={jobLocation} /> */}
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          {/* <JobInfo icon={<FaBriefcase />} text={jobType} /> */}
          {/* <div className={`status ${status}`}>{status}</div> */}
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/add-note'
              className='btn edit-btn'
              onClick={() => setEditJob(_id)}
            >
              <AiOutlineEdit/>
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteJob(_id)}
            >
              <MdDeleteOutline/>
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Job
