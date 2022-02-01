import { mount } from '@vue/test-utils';
import KbnButton from '@/components/atoms/KbnButton.vue';
import { expect } from 'chai';

describe('KbnButton', () => {
    describe('プロパティ', () => {
        describe('type', () => {
            describe('デフォルト', () => {
                it('kbn-buttonクラスを持つbutton要素で構成されること', () => {
                    const button = mount(KbnButton);
                    expect(button.element.tagName).to.equal('BUTTON');
                    expect(button.classes()).to.include('kbn-button');
                });
            });

            describe('button', () => {
                it('kbn-buttonクラスを持つbutton要素で構成されること', () => {
                    const button = mount(KbnButton, {
                        propsData: { type: 'button' },
                    });
                    expect(button.element.tagName).to.equal('BUTTON');
                    expect(button.classes()).to.include('kbn-button');
                });
            });

            describe('text', () => {
                it('kbn-button-textクラスを持つbutton要素で構成されること', () => {
                    const button = mount(KbnButton, {
                        propsData: { type: 'text' },
                    });
                    expect(button.element.tagName).to.equal('BUTTON');
                    expect(button.classes()).to.include('kbn-button-text');
                });
            });
        });

        describe('disabled', () => {
            describe('デフォルト', () => {
                it('disabled属性が付与されていないこと', () => {
                    const button = mount(KbnButton);
                    expect(button.element.disabled).to.equal(false);
                });
            });
            describe('true', () => {
                it('disabled属性が付与されていること', () => {
                    const button = mount(KbnButton, {
                        propsData: { disabled: true },
                    });
                    expect(button.element.disabled).to.equal(true);
                });
            });
            describe('false', () => {
                it('disabled属性が付与されていないこと', () => {
                    const button = mount(KbnButton, {
                        propsData: { disabled: false },
                    });
                    expect(button.element.disabled).to.equal(false);
                });
            });
        });
    });

    describe('イベント', () => {
        describe('click', () => {
            it('発行されていること', () => {
                const button = mount(KbnButton);
                button.trigger('click');
                expect(button.emitted().click.length).to.equal(2);
            });
        });
    });

    describe('スロット', () => {
        describe('コンテンツ挿入あり', () => {
            it('挿入されていること', () => {
                const button = mount(KbnButton, {
                    slots: {
                        default: () => '<p>hello</p>'
                    },
                });
                expect(button.text()).to.equal('hello');
            });
        });
        describe('コンテンツ挿入なし', () => {
            it('挿入されていないこと', () => {
                const button = mount(KbnButton);
                expect(button.text()).to.equal('');
            });
        });
    });
});