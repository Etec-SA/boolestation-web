import VerticalLogicTimeLine from '../../components/VerticalTimeline'

const LogicHistory = () => {
  return (
    <div className="overflow-hidden">
      <div
        className="w-full h-5 flex justify-center items-center my-12"
        id="timelineTitle"
      >
        <h3 className="text-white max-sm:text-xl text-2xl">
          Uma breve história da Lógica
        </h3>
      </div>
      <VerticalLogicTimeLine />
    </div>
  )
}

export default LogicHistory
