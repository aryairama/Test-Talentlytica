import React from 'react';
import style from './style.module.css';
import useHome from '../../hooks/local/useHome';
import { SimpleTable, Select, Button } from '../../components/base';
import iconUser from '../../assets/icon/icon-user.png';

const Home = () => {
  const { studentAssessment, handlerButtonSave, listOptionAssessment, handlerSelectAssessment } = useHome();
  return (
    <div className={style['container-background']}>
      <div className={style['container-form']}>
        <div className={style['form']}>
          <div className={style['form-header']}>
            <p className={style['text-form-header']}>Aplikasi Penilaian Mahasiswa</p>
          </div>
          <div className={style['form-content']}>
            <SimpleTable>
              <SimpleTable.Head>
                <SimpleTable.HeadContent content="" />
                <SimpleTable.HeadContent content="Aspek Penilaian 1" />
                <SimpleTable.HeadContent content="Aspek Penilaian 2" />
                <SimpleTable.HeadContent content="Aspek Penilaian 3" />
                <SimpleTable.HeadContent content="Aspek Penilaian 4" />
              </SimpleTable.Head>
              <SimpleTable.Body>
                {studentAssessment.map((assessment, index) => (
                  <SimpleTable.BodyTr key={index}>
                    <SimpleTable.BodyContent>
                      <div className={style['layout-icon-user']}>
                        <img src={iconUser} alt="icon-user" /> Mahasiswa {index + 1}
                      </div>
                    </SimpleTable.BodyContent>
                    <SimpleTable.BodyContent>
                      <Select
                        value={listOptionAssessment.filter((option) => option.value === assessment.aspek_penilaian_1)}
                        options={listOptionAssessment}
                        onChange={(e) => handlerSelectAssessment(index, 'aspek_penilaian_1', e.value)}
                      />
                    </SimpleTable.BodyContent>
                    <SimpleTable.BodyContent>
                      <Select
                        value={listOptionAssessment.filter((option) => option.value === assessment.aspek_penilaian_2)}
                        options={listOptionAssessment}
                        onChange={(e) => handlerSelectAssessment(index, 'aspek_penilaian_2', e.value)}
                      />
                    </SimpleTable.BodyContent>
                    <SimpleTable.BodyContent>
                      <Select
                        value={listOptionAssessment.filter((option) => option.value === assessment.aspek_penilaian_3)}
                        options={listOptionAssessment}
                        onChange={(e) => handlerSelectAssessment(index, 'aspek_penilaian_3', e.value)}
                      />
                    </SimpleTable.BodyContent>
                    <SimpleTable.BodyContent>
                      <Select
                        value={listOptionAssessment.filter((option) => option.value === assessment.aspek_penilaian_4)}
                        options={listOptionAssessment}
                        onChange={(e) => handlerSelectAssessment(index, 'aspek_penilaian_4', e.value)}
                      />
                    </SimpleTable.BodyContent>
                  </SimpleTable.BodyTr>
                ))}
              </SimpleTable.Body>
            </SimpleTable>
            <Button onClick={handlerButtonSave} className={style['btn-save']}>
              Simpan
            </Button>
            <div className="clear-both"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
