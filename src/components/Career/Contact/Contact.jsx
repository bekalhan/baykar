import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import css from './Contact.module.css';
import './Contact.css';


const Contact = () => {
  return (
    <div className={css.contact}>
        <div className={css.accordion}>
            <div className={css.header}>
                <span>Sıkça Sorulan Sorular</span>
            </div>
            <div className={css.questions}>
                <Accordion sx={{backgroundColor:'#f8f7f7'}}>
                        <AccordionSummary
                        expandIcon={<NavigateNextIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography sx={{color:'#666666','&:hover':{color:'#002359'},transition:'all 0.35s',fontWeight:'Bold'}}> 
                        <strong style={{color:'#666666',paddingRight:'2em'}}>
                            1 |
                        </strong>
                        Firmanıza CV getirerek ya da mail yoluyla iş başvurusu yapabilir miyim?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor:'#f4f4f4'}}>
                        <Typography>
                        Firmamıza iş başvurularınızı “Web Sitemiz” üzerinden iletebilirsiniz
                        </Typography>
                        </AccordionDetails>
                </Accordion>
                <Accordion sx={{backgroundColor:'#f8f7f7'}}>
                        <AccordionSummary
                        expandIcon={<NavigateNextIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography sx={{color:'#666666','&:hover':{color:'#002359'},transition:'all 0.35s',fontWeight:'Bold'}}> 
                        <strong style={{color:'#666666',paddingRight:'2em'}}>
                            2 |
                        </strong>
                        Web siteniz üzerinden firmanıza başvuru yaptım, tarafıma geri dönüş sağlanacak mıdır?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor:'#f4f4f4'}}>
                        <Typography>
                        Firmamıza iş başvurusunda bulunmuş tüm adaylarımıza başvuru durumu ile ilgili geri dönüş sağlanmaktadır.                        </Typography>
                        </AccordionDetails>
                </Accordion>
                <Accordion sx={{backgroundColor:'#f8f7f7'}}>
                        <AccordionSummary
                        expandIcon={<NavigateNextIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography sx={{color:'#666666','&:hover':{color:'#002359'},transition:'all 0.35s',fontWeight:'Bold'}}> 
                        <strong style={{color:'#666666',paddingRight:'2em'}}>
                            3 |
                        </strong>
                        Firmanıza CV getirerek ya da mail yoluyla iş başvurusu yapabilir miyim?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor:'#f4f4f4'}}>
                        <Typography>
                        Firmamıza iş başvurularınızı “Web Sitemiz” üzerinden iletebilirsiniz
                        </Typography>
                        </AccordionDetails>
                </Accordion>
                <Accordion sx={{backgroundColor:'#f8f7f7'}}>
                        <AccordionSummary
                        expandIcon={<NavigateNextIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography sx={{color:'#666666','&:hover':{color:'#002359'},transition:'all 0.35s',fontWeight:'Bold'}}> 
                        <strong style={{color:'#666666',paddingRight:'2em'}}>
                            4 |
                        </strong>
                        Daha önce Baykar Teknoloji'ye başvuru yapmıştım ancak başvurum olumsuz olarak sonuçlandı, tekrar başvuru yapmak istesem ne zaman başvurumu iletmem gerekir?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor:'#f4f4f4'}}>
                        <Typography>
                        Firmamıza daha önce değerlendirmenizin yapıldığı aynı pozisyon adına iş başvurusu yapmak isterseniz başvurunuzun olumsuz sonuçlanmasından “6 ay sonra” yeniden başvuru yapabilirsiniz. Farklı pozisyonlar için herhangi bir zaman sınırlaması bulunmamaktadır.                        </Typography>
                        </AccordionDetails>
                </Accordion>
            </div>
            <button>TÜM SSS</button>
        </div>
        <div className={css.comm}>
            <form>
                <span>İLETİŞİM</span>
                <div className={css.fields}>
                    <input type="text" placeHolder="Ad Soyad"></input>
                    <input type="text" placeHolder="E-Posta*"></input>
                    <input type="text" placeHolder="Telefon"></input>
                    <textarea placeholder='Mesaj*'>
                    </textarea>
                    <button>GÖNDER ...</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact