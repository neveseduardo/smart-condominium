<template>
    <div class="footer-content">
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6"  class="footer-content-contact">
                <div>
                    <h5>INFORMAÇÕES DE CONTATO</h5>

					<ul>
						<li>
							<i class="fa fa-map-marked"></i>
							<span>
								<h6>Endereço</h6>
								Rua contexto de programação, 39, BH, MG</span>
						</li>
						<li>
							<i class="fa fa-phone"></i>
							<span>
								<h6>Telefone</h6>
								(31) 98888-8888</span></li>
						<li>
							<i class="fa fa-envelope"></i>
							<span>
								<h6>E-mail</h6>
								contato@ecommerce.com.br</span></li>
					</ul>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6"  class="footer-content-account">
                <div>
                    <h5>Minha conta ecommerce</h5>

					<ul>
						<li>Sobre nós</li>
						<li>Entre em contato</li>
						<li>Minha conta</li>
						<li>Histórico de pedidos</li>
					</ul>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6"  class="footer-content-help">
                <div>
                    <h5>Principais links</h5>

					<ul>
						<li>Dúvidas frequentes</li>
						<li>FAQ</li>
						<li>Sugestões e elogios</li>
					</ul>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6"  class="footer-content-newslatter">
                <div>
                    <h5>Newlatter</h5>

					<p>Garata ofertas na integra assinando nossa neslatter</p>

					<form>
						<input class="form-control" type="email" name="email" placeholder="Seu melhor e-mail" v-model="email">
					</form>
                </div>
            </el-col>
        </el-row>

		<el-divider></el-divider>

		<p>
			<span>© Ecommerce - {{ new Date().getFullYear() }} - Direitos autorais rezervados.</span>
			<ul>
				<li><a><i class="fab fa-facebook"></i></a></li>
				<li><a><i class="fab fa-youtube"></i></a></li>
				<li><a><i class="fab fa-google"></i></a></li>
			</ul>
		</p>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data: () => {
        return {
            email: '',
        };
    },
};
</script>

<style lang="scss">
.home-footer {
    background-color: #333;
    color: #fff;
    height: auto !important;
}
.footer-content {
    padding: 3rem 0;
}
.footer-content > p {
    display: flex;
    flex-direction: row;
}
.footer-content > p span {
    flex: 1;
}
.footer-content > p ul {
    display: flex;
    list-style-type: none;
    list-style: none;
    padding: 0;
}
.footer-content > p ul li {
    width: 40px;
    text-align: center;
}
.footer-content-contact ul,
.footer-content-account ul,
.footer-content-help ul,
.footer-content-newslatter ul {
    list-style: none;
    list-style-type: none;
    padding: 0;
    margin: 0;
}
.footer-content-contact ul li,
.footer-content-account ul li,
.footer-content-help ul li,
.footer-content-newslatter ul li {
	display: flex;
	align-items: center;
    padding: 0.7rem 0;
}
.footer-content-contact ul li h6,
.footer-content-account ul li h6,
.footer-content-help ul li h6,
.footer-content-newslatter ul li h6{
	text-transform: uppercase;
}
.footer-content-contact ul li i,
.footer-content-account ul li i,
.footer-content-help ul li i,
.footer-content-newslatter ul li i{
	width: 40px;
	text-align: center;
}
.footer-content-contact h5,
.footer-content-account h5,
.footer-content-help h5,
.footer-content-newslatter h5 {
	font-weight: bold !important;
	text-transform: uppercase;
	font-size: 1.7rem;
}
</style>
