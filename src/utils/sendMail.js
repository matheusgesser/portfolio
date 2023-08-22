import { send } from '@emailjs/browser'
import { toast } from 'react-toastify';

export function sendMail(data) {
  const mail = toast.loading("Enviando...")
  if (data.name && data.message && data.email) {
    send("service_32ayppt", "template_yssgu0m" , {
      name: data.name,
      email: data.email,
      message: data.message,
    }, "5N3oBIgq_8exnoMgP")
      .then(function() {
        toast.update(mail, { render: "Mensagem enviada!", type: "success", isLoading: false, autoClose: 5000 });
      }, function() {
        toast.update(mail, { render: "Erro!", type: "error", isLoading: false, autoClose: 5000 });
      });
    return
  }
  toast.update(mail, { render: "Preencha todos os campos!", type: "warning", isLoading: false, autoClose: 5000 });
}