import { Schema, model } from 'mongoose'
import { TSemesterRegistration } from './semesterRegistration.interface'
import { SemesterRegistrationStatus } from './semesterRegistration.constant'

const semesterRegistrationSchema = new Schema<TSemesterRegistration>({
  academicSemester: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicSemester',
    required: true,
  },
  status: {
    type: String,
    enum: SemesterRegistrationStatus,
    default: 'UPCOMING',
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  maxCredit: {
    type: Number,
    required: true,
  },
  minCredit: {
    type: Number,
    required: true,
  },
})

export const SemesterRegistration = model<TSemesterRegistration>(
  'SemesterRegistration',
  semesterRegistrationSchema,
)
