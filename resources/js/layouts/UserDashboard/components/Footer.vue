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