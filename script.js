const simbolos = ["🐯", "🍒", "🔔", "💎", "7️⃣"];
let creditos = 100;

document.getElementById("jogarBtn").addEventListener("click", () => {
  if (creditos <= 0) {
      alert("Você está sem créditos!");
          return;
            }

              creditos -= 10;
                document.getElementById("creditos").textContent = creditos;

                  const slot1 = simbolos[Math.floor(Math.random() * simbolos.length)];
                    const slot2 = simbolos[Math.floor(Math.random() * simbolos.length)];
                      const slot3 = simbolos[Math.floor(Math.random() * simbolos.length)];

                        document.getElementById("slot1").textContent = slot1;
                          document.getElementById("slot2").textContent = slot2;
                            document.getElementById("slot3").textContent = slot3;

                              const resultadoTexto = document.getElementById("resultadoTexto");

                                if (slot1 === slot2 && slot2 === slot3) {
                                    creditos += 50;
                                        resultadoTexto.textContent = "🎉 JACKPOT! Você ganhou 50 créditos!";
                                          } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3) {
                                              creditos += 20;
                                                  resultadoTexto.textContent = "👏 Quase lá! Você ganhou 20 créditos!";
                                                    } else {
                                                        resultadoTexto.textContent = "😢 Nada dessa vez... Tente novamente!";
                                                          }

                                                            document.getElementById("creditos").textContent = creditos;
                                                            });
                                                            