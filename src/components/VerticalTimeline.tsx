import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const VerticalLogicTimeLine = () => {
  interface HistoryItem {
    title: string
    subTitle: string
    content: string
    date: string
  }

  const historyItems: HistoryItem[] = [
    {
      title: 'Aristóteles',
      subTitle: 'Grécia Antiga',
      content:
        'Aristóteles cria sua teoria dos silogismos e seu "Órganon", a teoria da lógica.',
      date: '150 a.C',
    },
    {
      title: 'Euclides',
      subTitle: 'Grécia Antiga',
      content:
        'Euclides desenvolve os fundamentos da geometria e lógica em "Elementos".',
      date: '300 a.C',
    },
    {
      title: 'Boécio',
      subTitle: 'Roma Antiga',
      content:
        'Boécio contribui para a lógica com sua obra "Consolação da Filosofia" e tradução de textos lógicos gregos.',
      date: '480 d.C',
    },
    {
      title: 'Frege',
      subTitle: 'Século XIX',
      content:
        'Gottlob Frege introduz a lógica de predicados e fundamenta a lógica moderna.',
      date: '1848',
    },
    {
      title: 'Russell e Whitehead',
      subTitle: 'Século XX',
      content:
        'Bertrand Russell e Alfred North Whitehead publicam "Principia Mathematica", uma obra fundamental na lógica matemática.',
      date: '1910',
    },
  ];


  return (
    <VerticalTimeline lineColor={'#f1f1f1'}>
      {historyItems.map((item, idx) => {
        let mainColor = idx % 2 === 0 ? '#3F6004' : '#9D0101'
        return (
          <VerticalTimelineElement
            key={idx}
            className="vertical-timeline-element--work"
            contentStyle={{ background: mainColor, color: '#fff' }}
            date={item.date}
            iconStyle={{ background: mainColor }}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle italic">
              {item.subTitle}
            </h4>
            <p>{item.content}</p>
          </VerticalTimelineElement>
        )
      })}
      <VerticalTimelineElement key={99} iconStyle={{ background: '#3f6911' }} />
    </VerticalTimeline>
  )
}

export default VerticalLogicTimeLine
